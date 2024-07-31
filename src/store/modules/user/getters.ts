import { GetterTree } from 'vuex'
import UserState from './UserState'
import RootState from '@/store/RootState'

const getters: GetterTree <UserState, RootState> = {
    isAuthenticated (state) {
        return !!state.token;
    },
    isUserAuthenticated(state) {
        return state.token && state.current
    },
    getBaseUrl(state) {
        let baseURL = process.env.VUE_APP_BASE_URL;
        if (!baseURL) baseURL = state.instanceUrl;
        return baseURL.startsWith('http') ? baseURL : `https://${baseURL}.hotwax.io/api/`;
    },
    getUserToken (state) {
        return state.token
    },
    getCurrentEComStore(state) {
        return state.currentEComStore;
    },
    getUserProfile (state) {
        return state.current
    },
    getCurrentFacility (state){
        return state.currentFacility;
    },
    getInstanceUrl (state) {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        return baseUrl ? baseUrl : state.instanceUrl;
    },
    getPwaState (state) {
        return state.pwaState;
    },
    getFieldMappings: (state) => (type?: string) => {
        if (type) {
            const fieldMapping = (state.fieldMappings as any)[type];
            return fieldMapping ? fieldMapping : {} 
        }
        return state.fieldMappings;
    },
    getPreferredDateTimeFormat (state) {
        return state.preferredDateTimeFormat;  
    },    
    getCurrentMapping(state) {
        return JSON.parse(JSON.stringify(state.currentMapping))
    },
    getUserPermissions(state) {
        return state.permissions;
    },
}
export default getters;