import React from 'react';
import './collection.styles.scss';

import {connect} from 'react-redux';
import {selectCollection} from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({collection: {title, items}}) => {

    return (
        <div className='collection-page'>
            <h2 className={'title'}>{title}</h2>
            <div className={'items'}>
                {
                    items.map(c => (
                        <CollectionItem
                            key={c.id}
                            item={c}
                        />
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
