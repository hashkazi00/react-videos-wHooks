import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import useVideos from '../hooks/useVideos';



const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos('cars');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);
    
    return(
        <div className="container ui">
            <SearchBar onTermSubmit={search}/> 
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/> 
                    </div>
                    <div className="five wide column">
                        <VideoList  videos={videos} 
                                    onVideoSelect={(video) => setSelectedVideo(video)}/>
                    </div>
                </div>
            </div>
         </div>
        );

};
export default App;