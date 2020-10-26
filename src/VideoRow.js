import React from 'react'
import './VideoRow.css'

function VideoRow({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image
}) {
    return (
        <div className="VideoRow">
            <img src={image} alt="" />
            <div className="VideoRow_text">
                <h4>{title}</h4>
                <p className="videoRow_headlines">
                    {channel} .<span className="videoRow_subs"> <span className="videoRow_subNo"> {subs} </span> subscribers </span>{views} views . {timestamp}
                </p>
                <p className="videoRow_description">{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
