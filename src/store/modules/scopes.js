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
        const response = fetch(`http://localhost:8090/scope/delete?scopeId=${scope.id}`, {
            method: "DELETE",
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response.then(res => res.json()).then(deleted => {
            if (deleted) {
                commit("deleteScope", scope);
            } else {
                console.log(`Failed to delete scope ${scope.name}.`)
            }
        });
    },
    addScope({ commit }, scope) {
        const response = fetch("http://localhost:8090/scope/create", {
            method: "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scope)
        });
        response.then(res => res.json()).then(final => commit("addScope", final));
    },
    editScope({ commit }, scope) {
        console.log(`here comes the scope to edit: `, scope);
        const response = fetch(`http://localhost:8090/scope/update?scopeId=${scope.id}`, {
            method: "PUT",
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scope)
        });
        response.then(res => res.json()).then(final => commit("editScope", final));
    },
};

const mutations = {
    setScopes: (state, scopes) => (state.scopes = scopes),
    addScope: (state, scope) => state.scopes.push(scope),
    deleteScope: (state, scope) => state.scopes.filter(s => s.id !== scope.id),
    editScope: (state, scope) => {
        const index = state.scopes.findIndex(s => s.id === scope.id);
        state.scopes[index] = scope;
    }
};

export default {
    state, getters, actions, mutations
};