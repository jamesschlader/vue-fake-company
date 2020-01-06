const state = {
    applicants: [],
};

const getters = {
    getAllApplicants: state => state.applicants,
};

const actions = {
    fetchAllApplicants({ commit }) {
        const response = fetch("http://localhost:8090/getAllApplicants");
        response.then(res => res.json().then(final => {
            commit("setApplicants", final);
        }));
    },
};

const mutations = {
    setApplicants: (state, applicants) => (state.applicants = applicants)
};

export default {
    state,
    getters,
    actions,
    mutations,
};
