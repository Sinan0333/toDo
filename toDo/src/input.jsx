import React,{useState,useEffect} from 'react'
import List from "./list"
import './input.css'

function Input(){
    const [toDos,setToDos] = useState([])
    const [toDo,setToDo] = useState("")
    useEffect(()=>{
        localStorage.setItem('to',JSON.stringify(toDos))
    },[toDos])



    return(
<div className="card input-container" style={{ borderRadius: '15px'}}>
    <div className="card-body p-5 ">
        <h6 className="mb-3">Awesome Todo List</h6>
        <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input onChange={(e)=>setToDo(e.target.value)}
                    type="text"
                    id="form3"
                    className="form-control form-control-lg "
                    value={toDo}
                />
                <label className="form-label" htmlFor="form3">
                    What do you need to do today?
                </label>
            </div>
            <button  onClick={()=>{
                setToDos([...toDos,{id:Date.now(),value:toDo,status:false}])
                setToDo("")}} type="submit" className="btn  btn-lg ms-2 input-container">
            Add
            </button>
        </div>
       <List toDos={toDos}setToDos={setToDos} />
    </div>
</div>
    )
}

export default Input