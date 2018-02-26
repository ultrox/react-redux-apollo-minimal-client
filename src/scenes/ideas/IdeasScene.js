import React from 'react';
import AddIdea from "./components/AddIdea";
import VisibleIdeaList from "./containers/VisibleIdeaList";
import IdeaFooter from "./components/IdeaFooter";
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {styles} from "./ideas-scene.styles";

const IdeasScene = ({classes}) => {
    return (
        <div className={classes.root}>
            <Typography variant="display1">Ideas</Typography>
            <AddIdea/>
            <VisibleIdeaList/>
            <IdeaFooter/>
        </div>
    )
}
export default withStyles(styles)(IdeasScene);