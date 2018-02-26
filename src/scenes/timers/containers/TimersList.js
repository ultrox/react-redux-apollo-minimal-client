import React, {Component} from 'react';
import {withStyles} from "material-ui/styles";
import {connect} from 'react-redux'
import TimerListSingle from "../components/TimerListSingle";
import List from 'material-ui/List/List';

const styles = theme => {
    return {
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing.unit * 4,
        },
    }
};

class TimersList extends Component {
/*
    componentWillMount() {
        this.props.load();
    }
*/

    render() {
        const {
            classes,
            timers
        } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    {timers.map((timer, index) => {
                        return (
                            <TimerListSingle
                                timer={timer}
                                key={timer.id}/>
                        )
                    })}
                </List>
            </div>
        )
    }
}

TimersList = withStyles(styles)(TimersList);
export default TimersList;