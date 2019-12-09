import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";

import {connect} from 'react-redux';
import {updateCollections} from "../../redux/shop/shop.actions";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

class Shop extends React.Component {
    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            updateCollections(convertCollectionsSnapshotToMap(snapshot))
        })
    }

    componentWillUnmount() {
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={match.path} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
