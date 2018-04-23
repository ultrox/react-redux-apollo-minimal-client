import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { navRoutes } from "./platform/appData";
import LeftDrawer from "./components/LeftDrawer";
import Header from "./components/Header";
import Home from "./containers/Home";
import NotFoundPage from "./containers/NotFoundPage";
import IdeasScene from "./scenes/ideas/IdeasScene";
import CssBaseline from "material-ui/CssBaseline";
import withWidth, { LARGE } from "material-ui/utils/withWidth";
import { withStyles } from "material-ui/styles";
import { getUnits } from "./platform/styles";
import TimersScene from "./scenes/timers/TimersScene";
//--
const transActive = { opacity: 1 };
const transInactive = { opacity: 0 };

const styles = theme => {
  return {
    frame: {
      width: "inherit",
      maxWidth: "100vw",
      padding: [getUnits(1), getUnits(4)].join(" "),
    },
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  render() {
    const { classes } = this.props;
    let { navDrawerOpen } = this.state;
    // const paddingLeftDrawerOpen = 236;

    return (
      <BrowserRouter>
        <div className={["App", classes.frame].join(" ")}>
          <CssBaseline />
          <Header
            navRoutes={navRoutes}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(
              this
            )}
          />
          <LeftDrawer
            navDrawerOpen={navDrawerOpen}
            navItems={navRoutes}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(
              this
            )}
          />

          <AnimatedSwitch
            className="switch-wrapper"
            atEnter={transInactive}
            atLeave={transInactive}
            atActive={transActive}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/ideas" component={IdeasScene} />
            <Route exact path="/timers" component={TimersScene} />
            <Route path="*" component={NotFoundPage} />
          </AnimatedSwitch>
        </div>
      </BrowserRouter>
    );
  }
}

App = withWidth()(App);
App = withStyles(styles)(App);
export default App;
