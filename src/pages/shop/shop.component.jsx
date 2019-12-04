import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selectors";

import PreviewCollection from "../../components/collection-preview/collection-preview";

const Shop = ({collections}) => {
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <PreviewCollection
                        key={id}
                        {...otherCollectionsProps}
                    />
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);
