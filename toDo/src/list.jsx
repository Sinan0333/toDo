import React,{useState,useEffect} from 'react'

function List({toDos,setToDos}){
    useEffect(()=>{
        const item=JSON.parse(localStorage.getItem('to'))
        console.log(item);
        if(item.length!=0){
            setToDos(item)
        }
    },[])
    return(
    <ul className="list-group mb-0">
        {
            toDos.map((obj)=>{
                return(
                    <li key={obj.id} className="list-group-item d-flex input-container justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"  style={{ textDecoration: obj.status ? 'line-through wavy #164b55' : 'none' }}>
                        <div className="d-flex align-items-center">
                            <input  className="form-check-input me-2"  type="checkbox" value={obj.status} aria-label="..." onChange={(e)=>{
                                setToDos(toDos.filter((obj2)=>{
                                    if(obj2.id===obj.id){
                                        obj2.status=e.target.checked
                                    }
                                    return obj2
                                }))
                            }} />
                            {obj.value}
                        </div>
                            <i className="fas fa-times text-primary" onClick={()=>{
                                setToDos(toDos.filter((obj3)=>obj3.id !==obj.id))
                            }}></i>
                    </li>
                )
            })
        }
    </ul>
    )
}

export default List