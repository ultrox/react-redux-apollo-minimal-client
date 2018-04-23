import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import { globalStyles } from "../../../platform/styles";

const styles = theme => {
  return {
    listItem: {
      padding: 0,
      ...globalStyles.grid.base(),
      ...globalStyles.grid.spaceUnits(1),
      gridTemplateAreas: '"label label" "effort value"',
    },
  };
};

const Idea = ({ onClick, classes, idea }) => {
  console.log(idea);
  return (
    <ListItem
      className={classes.listItem}
      style={{
        textDecoration: idea.completed ? "line-through" : "none",
      }}
    >
      <span style={{ gridArea: "label" }}>
        <Checkbox onClick={onClick} checked={idea.completed} />
        {idea.text}
      </span>

      <TextField
        label="Effort"
        value={idea.effort}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ gridArea: "effort" }}
        margin="normal"
      />

      <TextField
        label="Value"
        value={idea.value}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ gridArea: "value" }}
        margin="normal"
      />
    </ListItem>
  );
};

Idea.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Idea);
