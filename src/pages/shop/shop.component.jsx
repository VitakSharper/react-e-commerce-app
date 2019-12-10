import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {

    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }

    render() {
        const {match, loading} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={match.path}
                       render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )

    }
}

const mapStateToProps = createStructuredSelector({
    loading: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
