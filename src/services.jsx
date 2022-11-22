import axios from 'axios'
const BASE_BACKEND_URL = 'http://localhost:5000'

export default {
    getAllDatas: () => axios.get(`${BASE_BACKEND_URL}/room_datas`),
    postDatas: datas => axios.post(`${BASE_BACKEND_URL}/room_datas`, datas),
    editDatas: id => axios.get(`${BASE_BACKEND_URL}/room_datas/${id}`),
    updateDatas: datas => axios.put(`${BASE_BACKEND_URL}/room_datas/${datas.id}`, datas),
    deleteDatas: id => axios.delete(`${BASE_BACKEND_URL}/room_datas/${id}`),
}
