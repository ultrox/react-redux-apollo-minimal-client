import React from 'react'
// import PropTypes from 'prop-types'
import Idea from '../components/Idea'
import List from "material-ui/List";
import {withStyles} from 'material-ui/styles';
import {globalStyles} from "../../../platform/styles";

const styles = theme => {
    return {
        list: {
            ...globalStyles.grid.base(),
            ...globalStyles.grid.spaceUnits(1),
            ...globalStyles.grid.autoFlow('row'),
        },
    };
};

const IdeaList = ({ideas, onIdeaClick, classes}) => {
    return (
        <List className={classes.list}>
            {ideas.map(idea =>
                <Idea
                    key={idea.id}
                    idea={idea}
                    onClick={() => onIdeaClick(idea.id)}/>
            )}
        </List>
    )
};

export default withStyles(styles)(IdeaList)
