import gql from 'graphql-tag';

let nextIdeaId = 0;
const ideas = {
    defaults: {
        ideas: [],
    },
    resolvers: {
        Mutation: {
            addIdea: (_, {text}, {cache}) => {
                const query = gql`
                    query GetIdeas {
                        ideas @client {
                            id
                            text
                            completed
                        }
                    }
                `;
                const previous = cache.readQuery({query});
                const newIdea = {
                    id: nextIdeaId++,
                    text,
                    completed: false,
                    __typename: 'IdeaItem',
                };
                const data = {
                    ideas: previous.ideas.concat([newIdea]),
                };
                cache.writeData({data});
                return newIdea;
            },
            toggleIdea: (_, variables, {cache}) => {
                const id = `IdeaItem:${variables.id}`;
                const fragment = gql`
                    fragment completeIdea on IdeaItem {
                        completed
                    }
                `;
                const idea = cache.readFragment({fragment, id});
                const data = {...idea, completed: !idea.completed};
                cache.writeData({id, data});
                return null;
            },
        },
    },
};

export default ideas;
