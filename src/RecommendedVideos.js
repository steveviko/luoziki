import React from 'react';
import './RecommendedVideos.css';
import Video from './Video';



function RecommendedVideos() {
    return (
        <div className="recommendedvideo">
            <h2>Recommended</h2>

            <div className="recommendedvideo_videos">

                <Video 
                title="Become a superstar in one month"
                views="4.6M Views"
                timestamp="4 days ago"
                channel_image="https://picsum.photos/10?random=6"
                channel="steve viko"
                image="https://picsum.photos/250/140?random=40"
                
                />
                 <Video 
                title="All about us"
                views="5.6M Views"
                timestamp="2 days ago"
                channel_image="https://picsum.photos/10?random=5"
                channel="vvv viko"
                image="https://picsum.photos/250/140?grayscale"
                
                />

<Video 
                title="The journey to Fredom"
                views="7.6M Views"
                timestamp="1 days ago"
                channel_image="https://picsum.photos/10?random=4"
                channel="steve german"
                image="https://picsum.photos/seed/picsum/250/140"
                
                />
                 <Video 
                title="Ambition is priceless"
                views="10.6M Views"
                timestamp="56 days ago"
                channel_image="https://picsum.photos/10?random=3"
                channel="i and i"
                image="https://picsum.photos/id/23/250/140"
              
                
                />
                  <Video 
                title="A uinted community"
                views="10.6M Views"
                timestamp="56 days ago"
                channel_image="https://picsum.photos/10?random=1"
                channel="i and i"
                image="https://picsum.photos/250/140?random=26"
               
                
                />
                <Video 
                title="Let thier be light"
                views="4.6M Views"
                timestamp="4 days ago"
                channel_image="https://picsum.photos/10?random=18"
                channel="steve viko"
                image="https://picsum.photos/250/140?random=25"
                
                />
                 <Video 
                title="You will never walk alone"
                views="5.6M Views"
                timestamp="2 days ago"
                channel_image="https://picsum.photos/10?random=17"
                channel="vvv viko"
                image="https://picsum.photos/250/140?random=23"
                
                />

<Video 
                title="you only live once"
                views="7.6M Views"
                timestamp="1 days ago"
                channel_image="https://picsum.photos/10?random=16"
                channel="steve german"
                image="https://picsum.photos/250/140?random=22"
                
                />
                 <Video 
                title="Straight out of Ayer"
                views="10.6M Views"
                timestamp="56 days ago"
                channel_image="https://picsum.photos/10?random=15"
                channel="i and i"
                image="https://picsum.photos/250/140?random=21"
              
                
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
