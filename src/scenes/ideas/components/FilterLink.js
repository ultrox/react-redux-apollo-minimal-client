import { connect } from "react-redux";
import Link from "../../../components/Link";
import { setVisibilityFilter } from "../../../redux/modules/ideas";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.ideasFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
