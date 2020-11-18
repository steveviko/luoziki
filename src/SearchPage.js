import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage_filter">
            <TuneOutlinedIcon/> 
            <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow   
            image="https://picsum.photos/250/140?random=40"
            channel="steve viko"
            verified
            subs="745k"
            noOfVideos={653}
            description ="Home to greate motivational content"
            
            />
            <hr/> 
            <VideoRow            
            views="10.1M"
            subs="7405k"           
            description ="Home to greate motivational content"
            timestamp="1 hour ago"
            channel="steve viko"
            title="Lets make the world great again"
            image="https://picsum.photos/250/140?random=40"
            
            
            />
            <VideoRow            
            views="13.1M"
            subs="1405k"           
            description ="This is it"
            timestamp="20 hours ago"
            channel="be Iko"
            title="Take it away"
            image="https://picsum.photos/250/140?random=39"
            
            
            />
            <VideoRow            
            views="2.1M"
            subs="205k"           
            description ="All that matters about community"
            timestamp="10 mins ago"
            channel="jobs zero"
            title="Community service "
            image="https://picsum.photos/250/140?random=36"
            
            
            />
        </div>
    )
}

export default SearchPage
