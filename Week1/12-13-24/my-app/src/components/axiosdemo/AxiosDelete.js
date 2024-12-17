import axios from 'axios';

const AxiosDelete = ({posts, setPosts}) => {
    const deleteHandler=()=>{
        axios.delete("http://localhost:8000/posts/5")
        .then(res=>{
            console.log("delete successful")
            const newPosts = posts.filter(post=>post.id!==5)
            setPosts(newPosts)
        })
        .catch(error=>{
            console.log(error)
        }) 
    }
    return ( 
        <>
        <button onClick={deleteHandler}>Delete</button>
        </>
     );
}
 
export default AxiosDelete;