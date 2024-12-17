import {useState, useEffect} from 'react';
import axios from "axios";
import DisplayPost from "./DisplayPost";
import AxiosPost from './AxiosPost';
import AxiosPatch from './AxiosPatch';
import AxiosDelete from './AxiosDelete';

const AxiosGetDemo = () => {
    const[posts, setPosts]=useState([])
    useEffect(()=>{
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get("http://localhost:8000/posts")
        .then(res=>{
            //console.log(res)
            setPosts(res.data)
        })
    }, [posts])
    return (
        <>
        <h2>Axios Demo</h2>
        {/* {
            posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        } */}
        <DisplayPost posts={posts}/>
        <AxiosPost posts={posts} setPosts={setPosts}/>
        <AxiosPatch posts={posts} setPosts={setPosts}/>
        <AxiosDelete posts={posts} setPosts={setPosts}/>
        </>
    )
}

export default AxiosGetDemo