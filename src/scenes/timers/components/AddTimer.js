import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import { globalStyles } from "../../../platform/styles";
import { defaultTimer } from "../../../redux/modules/timers";

const styles = theme => {
  return {
    form: {
      ...globalStyles.grid.gridStarter("column", 1),
    },
    button: {},
  };
};

class AddTimer extends Component {
  state = defaultTimer;

  commitFn(dispatchFn) {
    dispatchFn(this.state);
    this.setState(defaultTimer);
  }

  render() {
    const { classes, commit } = this.props;

    return (
      <form
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          this.commitFn(commit);
        }}
      >
        <TextField
          label="Label"
          value={this.state.label}
          onChange={e => {
            this.setState({ label: e.target.value });
          }}
        />
        <TextField
          label="Description"
          value={this.state.description}
          onChange={e => {
            this.setState({ description: e.target.value });
          }}
        />
        <Button
          variant="raised"
          className={classes.button}
          color="primary"
          type="submit"
        >
          Start Timer
        </Button>
      </form>
    );
  }
}

AddTimer = withStyles(styles)(AddTimer);
export default AddTimer;
