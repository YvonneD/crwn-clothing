import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATAE_COLLECTIONS,
  payload: collectionsMap,
});
