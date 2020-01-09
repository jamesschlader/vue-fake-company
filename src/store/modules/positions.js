const state = {
    positions: [{ id: 1, title: "junior dev", rate: 26.00, frequency: "hour", scopes: [] }]
};

const getters = {
    getAllPositions: state => state.positions,
    getOnePositionById: (state, id) => state.positions.find(position => position.id === id),
    getOnePositionByTitle: (state, target) => state.positions.find(position => position.title === target),
    searchPositionByTitle: (state, target) => state.positions.filter(position => {
        const text = new RegExp(target, "g");
        return position.title.match(text);
    }),
    getPositionsAboveRate: (state, rate) => state.positions.filter(position => position.rate >= rate),
    getPositionsBelowRate: (state, rate) => state.positions.filter(position => position <= rate),
    getLastPositionAdded: (state) => state.positions[state.positions.length - 1]
};

const actions = {
    fetchAllPositions({ commit }) {
        const response = fetch("http://localhost:8090/position/all", {
            mode: "cors",
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            }
        });
        response.then(res => res.json()).then(final => commit("setPositions", final));

    },
    addPosition({ commit }, newPosition) {
        const response = fetch("http://localhost:8090/position/create", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPosition)
        });
        response.then(res => res.json()).then(final => commit("addPosition", final));
    },
    deletePosition({ commit }, position) {
        const response = fetch(`http://localhost:8090/position/delete?positionId=${position.id}`, {
            method: "DELETE",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        response.then(res => res.json()).then(deleted => {
            if (deleted) {
                commit("deletePosition", position);
            }
        });

    },
    editPosition({ commit }, position) {
        const response = fetch(`http://localhost:8090/position/update`, {
            method: "PUT",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(position)
        });
        response.then(res => res.json()).then(final => {
            if (final) {
                commit("editPosition", final);
            }
        });

    }
};

const mutations = {
    setPositions: (state, positions) => state.positions = positions,
    addPosition: (state, newPosition) => state.positions.push(newPosition),
    deletePosition: (state, target) => {
        state.positions = state.positions.filter(position => position.id !== parseInt(target.id));
    },
    editPosition: (state, target) => {
        const index = state.positions.findIndex(position => position.id === target.id);
        state.positions[index] = target;
    }
};

export default {
    state, getters, actions, mutations
};