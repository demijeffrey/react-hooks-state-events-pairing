import React from 'react'

function VideoComponent({ video }) {
    return (
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
}

export default VideoComponent