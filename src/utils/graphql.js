import ApolloClient from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import gql from 'graphql-tag';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';

const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'});
const githubToken = '37debc628ee18b07f3451bd35ac733723c719db0';

const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: `Bearer ${githubToken}`
        }
    });
    return forward(operation);
});

const client = new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
export {gql};
