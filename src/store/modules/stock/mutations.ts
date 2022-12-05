import { MutationTree } from 'vuex'
import StockState from './StockState'
import * as types from './mutation-types'

const mutations: MutationTree <StockState> = {
  [types.STOCK_LIST_UPDATED] (state, payload) {
    state.list.items = payload.items;
    state.list.original = payload.original;
    state.list.unidentifiedProductItems = payload.unidentifiedProductItems;
  },
  [types.STOCK_LIST_ITEMS_UPDATED] (state, payload) {
    state.list.items = payload;
  },
}
export default mutations;