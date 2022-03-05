import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080"
})


export const spotifyApi = axios.create({
    baseURL: "https://api.spotify.com/v1"
})