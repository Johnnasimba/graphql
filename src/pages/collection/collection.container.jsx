import React from 'react'
import {Query} from 'react-apollo'
import { gql } from 'apollo-boost'


import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';
import { loadPartialConfig } from '@babel/core';
import { loadConfig } from 'browserslist';

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionByTitle($title: string!) {
        getCollectionByTitle(title: $title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`

const CollectionPageContainer = ({ match }) => (
    <Query query={GET_COLLECTION_BY_TITLE} variables= {{title: match.params.collectionId}}>
       { ({loading, data: {getCollectionsByTitle}}) => {
            if(loading) return <Spinner />
            return <CollectionPage collection={getCollectionsByTitle} />
        }
    }
    </Query>
);

export default CollectionPageContainer;