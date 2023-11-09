const API="https://api.themoviedb.org/3";
export function get(path) {
    return fetch(API+path, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjljNDk2MzRlOWE3YjAwN2YwNmNjY2UwMmIzOTJmOSIsInN1YiI6IjVkZjBiMjA0ZGM4NjQ3MDAxMWM4ZWU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VU2w9VEUyDhXAA97c8DheJKPlOr_DHtVxle_-hUxBbU",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json());
}