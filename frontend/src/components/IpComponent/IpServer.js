const API_URL = "http://127.0.0.1:8000/info/";

export const ipList = async () => {
    return await fetch(API_URL)
};