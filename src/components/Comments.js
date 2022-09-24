import React, { useState } from 'react'
import SearchBar from './SearchBar'

function Comments({ video }) {
    // console.log(video.comments.user)
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)
    const [comments, setComments] = useState(video.comments)

    console.log(comments)

    function upvoteClick() {
        setUpvotes(upvotes + 1)
     }
     function downvoteClick() {
        setDownvotes(downvotes + 1)
     }

     function removeClick(removeComment) {
        console.log(removeComment)
        const newComments = comments.filter(comment => {
            if(comment.id !== removeComment.id) return comment
        })
        setComments(newComments)
     }



    function formSubmit(e) {
        e.preventDefault()
    }


    const users = comments.map(comment => {
        return (
            <div>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
                <button onClick={upvoteClick}>{upvotes} 👍</button>
                <button onClick={downvoteClick}>{downvotes} 👎</button>
                <button onClick={() => removeClick(comment)}>Remove Comment</button>
            </div>
        )
    })
    // const users2 = comments.map(comment => {
    //     return (
    //         <div>
    //             <h4>{comment.user}</h4>
    //             <p>{comment.comment}</p>
    //             <button onClick={upvoteClick}>{upvotes} 👍</button>
    //             <button onClick={downvoteClick}>{downvotes} 👎</button>
    //             <button onClick={() => removeClick(comment)}>Remove Comment</button>
    //         </div>
    //     )
    // })

    function formInput(e){
        // console.log(e.target.value)
        const filterComments = comments.filter(comment => {
            if(e.target.value === comment.user) return comment
            // return comments
        })
        setComments(filterComments)
        // console.log(filterComments)
    }

    return (
        <div>
            <h2>{video.comments.length} Comments</h2>
            <SearchBar formSubmit={formSubmit} formInput={formInput} />
            <br />
            {users}
            {/* {comments && comments.length < video.comments.length ? {users2} : {users} */}
        </div>
    )
}

export default Comments