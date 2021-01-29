import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';


const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]); //empty array to imitate the characteristics of an componentDidMount Lifecycle Method
    
    const search = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        });
        setVideos(response.data.items);
    };

    return [ videos, search ];
};

export default useVideos;