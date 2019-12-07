import React from 'react';
import './collection.styles.scss';

import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({match, collection}) => {
    console.log('category', collection);
    return (
        <div className='collection-page'>
            <h2>Collection</h2>
        </div>

    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
