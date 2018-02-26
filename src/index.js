// import {renderRoutes} from "react-router-config";
import './globals';
import './index.css';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import localForage from 'localforage';
import {ApolloProvider} from 'react-apollo'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {ConnectedRouter} from 'react-router-redux';
import {getStoredState} from 'redux-persist';
import {Provider} from 'react-redux';
import {trigger} from 'redial';
//--
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import client from './apollo-client/client';
import {createApp, socket} from './app';
//--
import isOnline from "./utils/isOnline";
//--
import createBrowserHistory from "history/createBrowserHistory";
import Loadable from "react-loadable";
import createStore from './redux/create';
//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

const persistConfig = {
    key: 'primary',
    storage: localForage,
    whitelist: ['auth', 'info', 'chat']
};

/*
const app = createApp();
const restApp = createApp('rest');
const client = apiClient();
*/
const app = createApp();
const restApp = {};
const apiClient = {};
const providers = {app, restApp, apiClient};

function initSocket() {
    socket.on('news', data => {
        console.log(data);
        socket.emit('my other event', {my: 'data from client'});
    });
    socket.on('msg', data => {
        console.log(data);
    });
    return socket;
}

global.socket = initSocket();

(async () => {
    const storedData = await getStoredState(persistConfig);
    const online = await (window.__data ? true : isOnline());

    if (online) {
        socket.open();
        await app.authenticate().catch(() => null);
    }
    const history = createBrowserHistory();
    const data = !online ? {...storedData, ...window.__data, online} : {...window.__data, online};
    const store = createStore({
        history,
        data,
        helpers: providers,
        persistConfig
    });

    injectTapEventPlugin();

    const drawApp = async () => {
        ReactDOM.render(
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ApolloProvider>,
            document.getElementById('root')
        );
    };

    await Loadable.preloadReady();
    await drawApp();

    if (process.env.NODE_ENV !== 'production') {
        window.React = React;
    }
    registerServiceWorker();
})();