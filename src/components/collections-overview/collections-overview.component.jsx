import React from 'react';
import './collections-overview.styles.scss';

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selectors";

import PreviewCollection from "../collection-preview/collection-preview";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <PreviewCollection
                    key={id}
                    {...otherCollectionsProps}
                />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
