import React, { useState } from 'react'
import Papa from 'papaparse'


const StepTwo = () => {
    const [data, setData]= useState([]);
    const [columnArray, setColumn]= useState([]);
    const [values, setValues]= useState([]);



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



  return (
 <div class='container'>
<div className='card' style={{width:'90%', margin:'10px', background:'rgba(0, 0, 0, 0.15)'}}>
    <div className='row justify-content-center m-3'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <h6>Project Name:</h6>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h6>Project Description:</h6>

        </div>

    </div>


    <div className='row justify-content-center m-3'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <h6>Client:</h6>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h6>Contractor:</h6>

        </div>

    </div>
        

<input type='file' name='file' accept='.csv' onChange={handleFile} style={{display:"block", margin:"10px auto"}}>
        </input>
        <br/>


<form className='m-3'>

<div classname="row mb-2">
  <div classname="col-lg-6 col-md-6 col-sm-6">
    <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Max_X</label>
      <input type="Max_X" className="form-control" name='Max_X' value={values.x} placeholder="Max X" />

    </div>
  </div>
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
  <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Min_X</label>
      <input type="Min_X" className="form-control" name='Min_X' value={values.a} placeholder="Min X" />
    </div>
  </div>
</div>

<div classname="row">
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
    <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Max_Y</label>
      <input type="Max_Y" className="form-control" name='Max_Y' value={values.y} placeholder="Max Y" />

    </div>
  </div>
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
  <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Min_Y</label>
      <input type="Min_Y" className="form-control" name='Min_Y' value={values.b} placeholder="Min Y" />
    </div>
  </div>
</div>



<div classname="row">
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
    <div className="form-group mb-3">
      <label htmlFor="exampleInputEmail1">Max_Z</label>
      <input type="Max_Z" className="form-control" name='Max_Z' value={values.z} placeholder="Max Z" />

    </div>
  </div>
  <div classname="mb-2 col-lg-6 col-md-6 col-sm-6">
  <div className="form-group mb-4">
      <label htmlFor="exampleInputEmail1">Min_Z</label>
      <input type="Min_Z" className="form-control" name='Min_Z' value={values.c} placeholder="Min Z" />
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