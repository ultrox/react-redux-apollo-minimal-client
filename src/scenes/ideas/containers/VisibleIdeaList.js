import {connect} from 'react-redux'
import IdeaList from './IdeaList'
import {toggleIdea, VISIBILITY_ACTIVE, VISIBILITY_ALL, VISIBILITY_COMPLETE} from "../../../redux/modules/ideas";

const getVisibleIdeas = (ideas, filter) => {
    switch (filter) {
        case VISIBILITY_ALL:
            return ideas;
        case VISIBILITY_COMPLETE:
            return ideas.filter(t => t.completed);
        case VISIBILITY_ACTIVE:
            return ideas.filter(t => !t.completed);
        default:
            // throw new Error('Unknown filter: ' + filter)
            return ideas
    }
};

const mapStateToProps = (state) => ({
    ideas: getVisibleIdeas(state.ideas.ideas, state.ideas.filter)
});

const mapDispatchToProps = {
    onIdeaClick: toggleIdea
};

const VisibleIdeaList = connect(
    mapStateToProps,
    mapDispatchToProps
)(IdeaList);

export default VisibleIdeaList
