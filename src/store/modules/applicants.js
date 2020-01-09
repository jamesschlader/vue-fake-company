const state = {
    applicants: [],
};

const getters = {
    getAllApplicants: state => state.applicants,
};

const actions = {
    fetchAllApplicants({ commit }) {
        const response = fetch("http://localhost:8090/applicant/getAllApplicants", {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        response.then(res => res.json().then(final => {
            commit("setApplicants", final);
        }));
    },

    addApplicant({ commit }, applicant, history) {
        const response = fetch("http://localhost:8090/applicant/create", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ applicant, history })
        });
        response.then(res => res.json()).then(final => commit("addApplicant", final));
    },

    recruitApplicant({ commit }) {
        const response = fetch("http://localhost:8090/applicant/", {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        response.then(res => res.json()).then(final => commit("addApplicant", final));
    }
};

const mutations = {
    setApplicants: (state, applicants) => (state.applicants = applicants),
    addApplicant: (state, applicant) => (state.applicants.push(applicant))
};

export default {
    state,
    getters,
    actions,
    mutations,
};
