import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import Typography from "material-ui/Typography";
import TimersList from "./containers/TimersList";
import { loadTimers } from "../../redux/modules/timers";

class TimersScene extends Component {
  render() {
    const { classes, fetchedTimers, error, loading } = this.props;

    if (loading) {
      return <div>loading timers...</div>;
    }
    if (error) {
      return <div>timers failed :( </div>;
    }

    return (
      <div className={classes.listGridRow}>
        <Typography variant="display1">Timers</Typography>
        <TimersList timers={fetchedTimers} />
      </div>
    );
  }

  componentWillMount() {
    this.props.load();
  }
}

const styles = theme => {
  return {};
};
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.timers.loading,
    fetchedTimers: state.timers.timers,
    error: state.timers.error,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => {
    dispatch(loadTimers());
  },
});

TimersScene = withStyles(styles)(TimersScene);
TimersScene = withApollo(TimersScene);
TimersScene = connect(mapStateToProps, mapDispatchToProps)(TimersScene);
export default TimersScene;
