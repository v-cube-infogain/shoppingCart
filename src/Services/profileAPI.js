import axios from 'axios';

const url = "https://6311c5a7f5cba498da853924.mockapi.io/vcube/api/users/";

export const updateProfileService = (id, data) => {
    return axios.put(`${url}/${id}`, data);
};