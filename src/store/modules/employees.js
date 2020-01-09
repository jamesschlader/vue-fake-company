const state = {
    employees: [
    ]
};

const getters = {
    getAllEmployees: state => state.employees
};

const actions = {
    fetchAllEmployees({ commit }) {
        const response = fetch("http://localhost:8090/getAllEmployees");
        response.then(res => res.json().then(final => {
            commit("setEmployees", final);
        }));
    }
};

const mutations = {
    setEmployees: (state, employees) => (state.employees = employees)
};

export default {
    state, getters, actions, mutations
};