import React, { useState } from 'react'
import Papa from 'papaparse'
import axios from 'axios';
import Api from '../api/Api';
import { useNavigate } from 'react-router-dom';


const StepTwo = () => {
    const [data, setData]= useState([]);
    const [columnArray, setColumn]= useState([]);
    const [values, setValues]= useState([]);



    const history = useNavigate();

    const [inpval, setINP] = useState({
        project_name: "",
        project_description: "",
        client: "",
        contractor: "", 
        max_x: "",
        min_x:"",
        max_y: "",
        min_y:"",
        max_z: "",
        min_z:"",

    })

    const fetchData = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

console.log(inpval);


const handleFile=(event)=>{
    Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function(result){
            const columnArray= [];
            // const valuesArray= [];
            // console.log(result);
            result.data.map((d)=>{
                columnArray.push(Object.keys(d));
                // valuesArray.push(Object.values(d))
            });


            // console.log(columnArray[0]);
            // console.log(valuesArray);

            const mappedData = result.data.map(item => ({
                x: parseInt(item.X),
                y: parseInt(item.Y),
                z: parseInt(item.Z),
                a: parseInt(item.X),
                b: parseInt(item.Y),
                c: parseInt(item.Z),

              }));

              const maxValues = mappedData.reduce((acc, curr) => {
                acc.x = Math.max(acc.x, curr.x);
                acc.y = Math.max(acc.y, curr.y);
                acc.z = Math.max(acc.z, curr.z);
                acc.a = Math.min(acc.a, curr.a);
                acc.b = Math.min(acc.b, curr.b);
                acc.c = Math.min(acc.c, curr.c);
                return acc;
              }, { x: -Infinity, y: -Infinity, z: -Infinity, a: Infinity, b: Infinity, c: Infinity });


              setData(result.data);
              setColumn(columnArray[0]);
              setValues(maxValues);
            

        }
    });
}

const postData =(e)=>{
  e.preventDefault();

  if(data.length > 0){

    const formData = {
      project_name: localStorage.getItem('name'),
      project_description: localStorage.getItem('desc'),
      client: localStorage.getItem('client'), 
      contractor: localStorage.getItem('contractor'),
      max_x: values.x,
      min_x: values.a,
      max_y: values.y,
      min_y: values.b,
      max_z: values.z,
      min_z: values.c,

    }

  axios.post(Api.AddData, formData).then((res)=>{
    if(res.status==200){
      history('/result')
    }
  }).catch((err)=>{

  })

  }else{
    const formDataTwo = {
      project_name: localStorage.getItem('name'),
      project_description: localStorage.getItem('desc'),
      client: localStorage.getItem('client'), 
      contractor: localStorage.getItem('contractor'),
      max_x: inpval.max_x,
      max_y: inpval.max_y,
      min_x: inpval.min_x,
      min_y: inpval.min_y,
      max_z: inpval.max_z,
      min_z: inpval.min_z,

  }

  axios.post(Api.AddData, formDataTwo).then((res)=>{
    if(res.status==200){
      history('/result')
    }
  }).catch((err)=>{

  })
  }

          
}



  return (
 <div className='container'>
<div className='card' style={{width:'90%', margin:'10px', background:'rgba(0, 0, 0, 0.15)'}}>
    <div className='row justify-content-center m-3'>
    <h1 className='text-center mb-5'>Step Two </h1>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <h6>Project Name: {localStorage.getItem('name')}</h6>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h6>Project Description: {localStorage.getItem('desc')}</h6>

        </div>

    </div>


    <div className='row justify-content-center m-3'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <h6>Client: {localStorage.getItem('client')}</h6>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h6>Contractor: {localStorage.getItem('contractor')}</h6>

        </div>

    </div>
        

<input type='file' name='file' accept='.csv' onChange={handleFile} style={{display:"block", margin:"10px auto"}}>
        </input>
        <br/>


<form className='m-3' onSubmit={postData}>

<div classname="row mb-2">
  <div classname="col-lg-6 col-md-6 col-sm-6">
    <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Max_X</label>
      <input type="max_x" className="form-control" name='max_x' value={values.x} onChange={fetchData} placeholder="Max X" required />

    </div>
  </div>
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
  <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Min_X</label>
      <input type="min_x" className="form-control" name='min_x' value={values.a} onChange={fetchData} placeholder="Min X" required/>
    </div>
  </div>
</div>

<div classname="row">
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
    <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Max_Y</label>
      <input type="max_y" className="form-control" name='max_y' value={values.y} onChange={fetchData} placeholder="Max Y" required/>

    </div>
  </div>
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
  <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Min_Y</label>
      <input type="min_y" className="form-control" name='min_y' value={values.b} onChange={fetchData} placeholder="Min Y" required/>
    </div>
  </div>
</div>



<div classname="row">
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
    <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Max_Z</label>
      <input type="max_z" className="form-control" name='max_z' value={values.z} onChange={fetchData} placeholder="Max Z" required/>

    </div>
  </div>
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
  <div className="form-group mb-4">
      <label htmlFor="exampleInputEmail1">Min_Z</label>
      <input type="min_z" className="form-control" name='min_z' value={values.c} onChange={fetchData} placeholder="Min Z" required/>
    </div>
  </div>

</div>
<div className='row'>
<button type="submit" class="btn btn-primary">Submit</button>

</div>

</form>

</div>







 {/* <table className="table table-striped">
  <thead>
    <tr>
        {columnArray.map((ele, i)=>{
            return(
                <th key={1} scope="col">{ele}</th>
                
            )
            
        })}

    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
    <td>{values.x}</td>
    <td>{values.y}</td>
    <td>{values.z}</td>
    <td>{values.a}</td>
    <td>{values.b}</td>
    <td>{values.c}</td>

    </tr>
     {values.map((v, i)=>{
        return(
             <tr key={1}>
      {v.map((ele, i)=>{
        return(
            <td key={2}>{ele}</td>

        )
      })}
    </tr>
        )
    })} 

      
   </tbody>
</table>  */}



     </div> 
  )
}

export default StepTwo