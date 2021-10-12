import axios from 'axios';

const url = 'https://ediaristas-workshop.herokuapp.com';

export const ApiService = axios.create({
    baseUrl: url,
    headers: {
        "Content-type": "application/json"
    },
})