import {useState} from "react";

const StateDemoComponent=()=> {
    // let name = "Jeremy";

    const [name, setName] = useState("Jeremy");
    const [age, setAge] = useState(21);
    const [when, setWhen] = useState(912)
    const changeName=(inputName, age1, when1)=> {
        setName(inputName);
        setAge(age1);
        setWhen(when1);
    }
    return (
        <>
        <h2>{name} is {age} years old on {when}</h2>
        <button onClick={()=>changeName("Ascher", 22, 913)}>Change Name</button>
        </>
    );
}

export default StateDemoComponent;