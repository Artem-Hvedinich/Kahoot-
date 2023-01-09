import type {Component} from "vue";
import type {Module} from "vuex";
import type {modalType, Mutations, Actions, Getters} from "./modalTypes";
import type {GetterTree, MutationTree, ActionTree,} from "vuex";
import type {RootState} from "@/store/state";
import type {Nullable} from "@/store/types/default";

// STATE
const state: modalType = {
    isShowVModal: false,
    component: null,
    data: {},
}


// GETTERS
const getters: GetterTree<modalType, RootState> & Getters = {
    isShowVModal: (state) => state.isShowVModal || false,
    getComponent: (state) => state.component || null,
    getComponentData: (state) => state.data || {},
}

// ACTIONS
const actions: ActionTree<modalType, RootState> & Actions = {
    /* loader page */
    showVModal({commit}, {component, data = {}}) {
        commit('setShowModal', true);
        commit('setComponent', component);
        commit('setComponentData', data);
    },
    closeVModal({commit}) {
        commit('setShowModal', false);
        commit('setComponent', null);
        commit('setComponentData', {});
    }
}

// MUTATIONS
const mutations: MutationTree<modalType> & Mutations = {
    setShowModal(state, value: Boolean) {
        state.isShowVModal = value;
    },
    setComponent(state, value: Nullable<Component>) {
        state.component = value;
    },
    setComponentData(state, value: Object) {
        state.data = value || {};
    },
}


export const modal: Module<modalType, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}