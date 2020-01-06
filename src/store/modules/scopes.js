const state = {
    scopes: [{ id: 1, name: "employee" }, { id: 2, name: "supervisor" }, { id: 3, name: "administrator" }]
};

const getters = {
    getAllScopes: state => state.scopes,
};

const actions = {
    fetchAllScopes({ commit }) {
        const response = fetch("http://localhost:8090/scope/all", {
            mode: "cors",
            credentials: 'same-origin', // include, *same-origin, omit
        });
        response.then(res => res.json().then(final => {
            commit("setScopes", final);
        }));
    },
    deleteScope({ commit }, scope) {
        commit("deleteScope", scope);
    },
    addScope({ commit }, content) {
        commit("addScope", content);
    },
    editScope({ commit }, scope) {
        commit("editScope", scope);
    }
};

const mutations = {
    setScopes: (state, scopes) => (state.scopes = scopes),
    addScope: (state, scope) => {
        const response = fetch("http://localhost:8090/scope/create", {
            method: "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scope)
        });

        response.then(res => res.json()).then(final => {
            state.scopes.push(final);
        });
    },
    deleteScope: (state, scope) => {
        const response = fetch(`http://localhost:8090/scope/delete?scopeId=${scope.id}`, {
            method: "DELETE",
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
        });
        response.then(res => res.json()).then(final => {
            state.scopes = state.scopes.filter(item => {
                return item.id !== scope.id;
            });
        });
    },
    editScope: (state, scope) => {
        fetch(`http://localhost:8090/scope/update?scopeId=${scope.id}`, {
            method: "PUT",
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scope)
        });
    }
};

export default {
    state, getters, actions, mutations
};