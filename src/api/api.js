import * as axios from 'axios'

export const BASE_URL = 'https://swapi.dev/api/people/'

export const api = {
    getPeople(){
        return axios.get(`${BASE_URL}`)
    },
    getCurrentPage(pageNumber){
        return axios.get(`${BASE_URL}/?page=${pageNumber}`)
    },
    search(name){
        return axios.get(`${BASE_URL}?search=${name}`)
    }
}