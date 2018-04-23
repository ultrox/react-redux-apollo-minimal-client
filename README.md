## Readme:

Elegant way how to use graphql as normal action, I found this solution to be
most useful one. I took the liberty to change/update some dependencies.

* `App.js => Application.js`, reason for this change is because I'm using zsh with
  option where I don't diversify with case, and there was `App.js` & `app.js`,
  so I had conflict.

> Client's store is from from the react redux feathers hot reload boilerplate. It's very simple, once you're setup for async actions. I have client.js where I build and export apollo client. If you look at the action for loadTimers (or similar name) you'll see where I'm calling client nearly identical to the way you'd query inside a cmp that's wrapped with withApollo. The response is handled like any other action.
~[therealkevinard](https://github.com/apollographql/apollo-client/issues/2593#issuecomment-368679847)

You need to call the client directly from wherever we want to invoke a query/mutation/subscription and get a result.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
