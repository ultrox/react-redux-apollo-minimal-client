import React from 'react';
import {connect} from 'react-redux'
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import {withStyles} from 'material-ui/styles';
import {globalStyles} from "../../../platform/styles";
import {addIdea} from "../../../redux/modules/ideas";

const styles = theme => {
    return {
        form: {
            ...globalStyles.grid.base(),
            ...globalStyles.grid.spaceUnits(1),
            ...globalStyles.grid.autoFlow('column'),
        },
        button: {
            margin: theme.spacing.unit,
        }
    }
};

let AddIdea = (props) => {
    const {dispatch, classes} = props;
    let input;

    return (
        <div>
            <form
                className={classes.form}
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    };
                    dispatch(addIdea(input.value));
                    input.value = '';
                }}>
                <TextField
                    label="New Idea"
                    inputRef={node => {
                        input = node
                    }}
                />
                <Button
                    variant="raised"
                    className={classes.button}
                    color="primary"
                    type="submit">
                    Add Idea
                </Button>
            </form>
        </div>
    )
};

AddIdea = connect()(AddIdea);
export default withStyles(styles)(AddIdea);