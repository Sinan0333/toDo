import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './container.css'
import Input from './input'

function container(){
    return(
    <section className="vh-100 background-container" style={{ backgroundColor: '#e2d5de' }}>
        <div className="container py-5 h-100" >
            <div className="row d-flex justify-content-center align-items-center h-100" >
                <div className="col col-xl-10" >
                   <Input /> 
                </div>
            </div>
        </div>
    </section>
    )
}


export default container