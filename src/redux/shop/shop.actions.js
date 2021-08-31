import ShopActionsTypes from "./shop.types"

export const updateCollections = collectinsMap => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectinsMap
})