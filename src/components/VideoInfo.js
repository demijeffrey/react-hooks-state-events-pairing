import React, { useState } from 'react'
import Comments from './Comments'

function VideoInfo({ video }) {

     const [upvotes, setUpvotes] = useState(video.upvotes)
     const [downvotes, setDownvotes] = useState(video.downvotes)
     const [showComments, setShowComments] = useState(true)

     function upvoteClick() {
        setUpvotes(upvotes + 1)
     }
     function downvoteClick() {
        setDownvotes(downvotes + 1)
     }

     function handleClick(e) {
        setShowComments(!showComments)
     }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={upvoteClick}>{upvotes} 👍</button>
            <button onClick={downvoteClick}>{downvotes} 👎</button>
            <br />
            <br />
            <button onClick={handleClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
            <br />
            {/* <Comments video={video} /> */}
            {showComments ? <Comments video={video} /> : null}
        </div>
    )
}

export default VideoInfo

//state for views, upvotes, downvotes

//const Search = () => {
//     const [showResults, setShowResults] = React.useState(false)
//     const onClick = () => setShowResults(true)
//     return (
//       <div>
//         <input type="submit" value="Search" onClick={onClick} />
//         { showResults ? <Results /> : null }
//       </div>
//     )
//   }