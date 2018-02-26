import React from 'react'
import FilterLink from './FilterLink'
import {VISIBILITY_ACTIVE, VISIBILITY_ALL, VISIBILITY_COMPLETE} from "../../../redux/modules/ideas";

const IdeaFooter = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter={VISIBILITY_ALL}>
            All
        </FilterLink>
        {", "}
        <FilterLink filter={VISIBILITY_ACTIVE}>
            Active
        </FilterLink>
        {", "}
        <FilterLink filter={VISIBILITY_COMPLETE}>
            Completed
        </FilterLink>
    </p>
)

export default IdeaFooter;