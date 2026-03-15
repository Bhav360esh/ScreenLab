import {useState} from "react";
import axios from "axios";

function JoinAudience(){

const [form,setForm]=useState({
name:"",
email:"",
age:""
});

const submit=async(e)=>{

e.preventDefault();

await axios.post(
"http://localhost:5000/api/join",
form
);

alert("Successfully joined!");

};

return(

<div className="container">

<h1>Join Audience Panel</h1>

<form onSubmit={submit}>

<input
placeholder="Name"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
placeholder="Age"
onChange={(e)=>setForm({...form,age:e.target.value})}
/>

<button>Join</button>

</form>

</div>

);

}

export default JoinAudience;