import axios from 'axios';

const KEY = 'AIzaSyCSZmkt-YucIsNFMKGjz00hb-ZgZ4g3xTc'; 

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})