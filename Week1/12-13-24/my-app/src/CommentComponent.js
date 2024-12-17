const CommentComponent=()=> {
    const comments = [
        {message: "So true", id: 1},
        {message: "You can say that again", id: 2},
        {message: "I also believe React is cool, yes", id: 3},
        {message: "Real one for this", id: 4},
    ]
    return(
        <>
        <h1>Comments</h1>
        <ul>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <li number = {comment.id}>{comment.message}</li>
                </div> 
            ))}
        </ul>
        </>
    )
}

export default CommentComponent;
