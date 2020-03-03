import axios from 'axios'


const http={};


http.get = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            if(res.status === 200) {
                return resolve(res.data);
            }
            reject(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

http.post = (url, data) => {
   axios.post(url, data).then((res) => {
        if(res.status===200) {
            return res.data;
        }
   }).catch((err) => {
        return err;
    })
}

export default http;