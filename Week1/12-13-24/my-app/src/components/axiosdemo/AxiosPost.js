import {useState} from 'react';
import axios from "axios";
import DisplayPost from './DisplayPost';
import AxiosGetDemo from './AxiosGetDemo';

const AxiosPost = ({posts, setPosts}) => {
    //const[posts, setPosts]=useState([])
    const createHandler=()=>{
        axios.post("http://localhost:8000/posts", {"userId": 1,
            "id": 7,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"})
            .then(res=>{
                console.log(res)
                setPosts((prevPosts)=>{return[...prevPosts, res.data]})
            })
    }
    return ( 
        <>
        <button onClick={createHandler}>Post</button>
        </>
     );
}
 
export default AxiosPost;