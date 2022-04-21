import axios from 'axios'

const themoviedb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default themoviedb