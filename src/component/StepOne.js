import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Api from '../api/Api';

const StepOne = () => {

    const history = useNavigate();

    const [inpval, setINP] = useState({
        name: "",
        project_description: "",
        client: "",
        contractor: ""

    })

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }




    const postData = async (e) => {
        e.preventDefault();
        const formData = {
            name: inpval.name,
            project_description: inpval.project_description,
            client: inpval.client, 
            contractor: inpval.contractor
        }
            axios.post(Api.AddStepOne, formData).then(res => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    history('/');
                } else {

                }

            });
        
    }







  return (
    <div className="container d-flex justify-content-center">
    <NavLink to="/">home</NavLink>

    <hr></hr>


    <div className="card" style={{ width: '70%', marginTop: '5%', background:"#f3f3f3" }}>
        <h1 className='text-center'>Step One </h1>
        <div className="card-body d-flex justify-content-center">
            <form className="mt-4" onSubmit={postData} >
                <div className="row">
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputEmail1" class="form-label">Project Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Project Description</label>
                        <textarea type="project_description" value={inpval.project_description} onChange={setdata} name="project_description" rows={3} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" class="form-label">Client</label>
                <input type="text" value={inpval.client} onChange={setdata} name="client" class="form-control" id="exampleInputPassword1" />
            </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Contractor</label>
                        <input type="text" value={inpval.contractor} onChange={setdata} name="contractor" class="form-control" id="exampleInputPassword1" />
                    </div>



                    <button type="submit" class="btn btn-primary">Next</button>
                </div>
            </form>

        </div>
    </div>



</div>
)
}

export default StepOne