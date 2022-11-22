import axios from 'axios'
const BASE_BACKEND_URL = 'https://rooms-production-api.herokuapp.com'

export default {
    getAllDatas: () => axios.get(`${BASE_BACKEND_URL}/rooms`),
    postDatas: datas => axios.post(`${BASE_BACKEND_URL}/rooms`, datas),
    editDatas: id => axios.get(`${BASE_BACKEND_URL}/rooms/${id}`),
    updateDatas: datas => axios.put(`${BASE_BACKEND_URL}/rooms/${datas.id}`, datas),
    deleteDatas: id => axios.delete(`${BASE_BACKEND_URL}/rooms/${id}`),
}
