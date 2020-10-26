import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Video.css";

function Video({image, title ,channel ,views ,timestamp, channel_image}) {
    return (
        <div className="video">
            <img  className="video_thumbnail" src={image} alt=""/>
            <div className="video_info">
                <Avatar className="video_avatar" alt={channel} src={ channel_image} />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
