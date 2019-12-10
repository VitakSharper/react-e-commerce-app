import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
// Object.keys(shop.collections).map(key => shop.collections[key])
    collections => collections ? Object.values(collections) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
);
