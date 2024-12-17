import {useState, useEffect} from "react";
import CommentDisplayComponent from "./CommentDisplayComponent";

const ListandKeysComponent = () => {
    const[comments, setComments] = useState ([
        {"id": 1, "name": "Jeremy", "email": "jeremy894@revature.net"},
        {"id": 2, "name": "Ascher", "email": "fake123@email.com"}
    ]); 
    const handleDelete=(id)=>{
        const newComment=comments.filter(comment=>comment.id!==id);
        setComments(newComment);
    }
    
    const[name, setName]=useState("Jeremy");

    useEffect(()=>{
        console.log("Use Effect called...")
    }, [name])
    return (
        <>
        <h2>List and Keys</h2>
        <CommentDisplayComponent comments={comments} handleDelete={handleDelete}/>
        <button onClick={()=>setName('Andrew')}>Change Name</button>
        </>
    );
}

export default ListandKeysComponent;