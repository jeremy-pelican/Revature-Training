import {useState} from 'react';
import axios from 'axios';

const AxiosPatch = ({posts, setPosts}) => {
    const patchHandler=()=>{
        axios.patch("http://localhost:8000/posts/4", {"title": "patched"})
        .then(res=>{
            console.log("Patch successful")
            setPosts(()=>{return[...posts, res.data]});
        })
    }
    return ( 
        <>
        <button onClick={patchHandler}>Patch</button>
        </>
     );
}
 
export default AxiosPatch;