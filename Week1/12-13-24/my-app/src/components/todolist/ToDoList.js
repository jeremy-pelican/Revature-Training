import {useState} from 'react';
import ListShow from './ListShow';
import ListAdd from './ListAdd';
import ListCount from './ListCount';
const ToDoList = () => {
    const[list, setList]=useState([]);
    // const[value,setValue]=useState("");
    // const submitHandler=(e)=>{
    //     e.preventDefault();
    //     console.log(value);
    //     setList((prevList)=>{return[...prevList, value]});
    //     console.log(list);
    //     setValue("");
    // }
    return ( 
        <div>
            <h3>To Do List</h3>
            {/* {
                list.map((item)=>(
                    <li key={item}>{item}</li>
                ))
            }
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button>Add</button>
            </form>
            <h3>Total Elements: {list.length}</h3> */}
            <ListShow list={list}/>
            <ListAdd list={list} setList={setList}/>
            <ListCount list={list}/>
        </div>
     );
}

export default ToDoList;