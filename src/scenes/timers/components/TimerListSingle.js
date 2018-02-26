import React, {Component} from 'react';
import {withStyles} from "material-ui/styles";
//--
import {globalStyles} from "../../../platform/styles";
//--
import Typography from "material-ui/Typography";
import ListItem from "material-ui/List/ListItem";
import Chip from 'material-ui/Chip';

const styles = theme => {
    return {
        item: {
            ...globalStyles.grid.base(),
            ...globalStyles.grid.spaceUnits(1),
            gridTemplateColumns: "1fr 1fr auto",
            alignItems: 'start',
            justifyItems: 'start',
        },
        label: {
            ...theme.typography.headline,
            color: theme.palette.text.secondary,
            gridRow: '1',
            gridColumn: '1/span 2',
        },
        description: {
            gridRow: '2',
            gridColumn: '1/span 2',
        },
        loop: {
            gridRow: '3',
            gridColumn: '1/span 2'
        },
        timeStart: {
            gridRow: '4',
            gridColumn: '1'
        },
        timeEnd: {
            gridRow: '4',
            gridColumn: '2'
        },
        actionStack: {
            gridRow: "1/5",
            gridColumn: 3
        },
        pos: {
            color: theme.palette.text.secondary,
        },
        chipList: {
            gridRow: 5,
            gridColumn: "1/4",
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '1fr',
        },
        chip: {
            margin: theme.spacing.unit / 2,
        },
    }
}

class TimerListSingle extends Component {
    render() {
        const {
            timer,
            classes
        } = this.props;

        return (
            <ListItem className={classes.item}>
                <Typography className={classes.label}>{timer.label}</Typography>
                <Typography variant="subheading" className={classes.loop}>Loop: {timer.loop}</Typography>
                <Typography variant="subheading" className={classes.description}>{timer.description}</Typography>

                <Typography className={[
                    classes.timeStart,
                    classes.pos
                ].join(' ')}>{timer.start}</Typography>
                <Typography className={[
                    classes.timeEnd,
                    classes.pos
                ].join(' ')}>{timer.end}</Typography>

                <span className={classes.chipList}>
                    {timer.tags.map((tag, index) => {
                        return (
                            <Chip key={index}
                                  label={tag}
                                  className={classes.chip}/>
                        )
                    })}
                </span>

                <Typography variant="subheading" className={classes.actionStack}>{timer.active ? 'Active' : 'Inactive'}</Typography>
            </ListItem>
        )
    }
}

TimerListSingle = withStyles(styles)(TimerListSingle)
export default TimerListSingle;