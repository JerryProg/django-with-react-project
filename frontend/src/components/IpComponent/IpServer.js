const API_URL = "http://127.0.0.1:8000/info/";

export const listIps = async () => {
    return await fetch(API_URL);
};

export const registerIp = async (newIp) => {
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "ip_address":String(newIp.ip_address).trim()
        })
    });
};