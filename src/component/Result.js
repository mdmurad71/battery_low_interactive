import React, { useEffect, useState } from 'react'
import Api from '../api/Api';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Result = () => {

  const [data, setData]= useState([]);

  useEffect(()=>{
    axios.get(Api.getData).then((response)=>{
      setData(response.data.data);
    }).catch((err)=>{

    })
  }, [])

console.log(data)


  return (
    <div className='container'>
    <div className='card' style={{width:'100%', marginTop:'5%', background:'rgba(0, 0, 0, 0.15)'}}>
    <h1 className='text-center mb-5'>Result Table</h1>


    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-primary mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>

    <table id="table-to-xls" class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">project name</th>
      <th scope="col">project description</th>
      <th scope="col">client</th>
      <th scope="col">contractor</th>
      <th scope="col">max_x</th>
      <th scope="col">min_x</th>
      <th scope="col">max_y</th>
      <th scope="col">min_y</th>
      <th scope="col">max_z</th>
      <th scope="col">min_z</th>

    </tr>
  </thead>
  <tbody>
    {data.map((ele, i)=>{
      return(
      <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{ele.project_name}</td>
      <td>{ele.project_description}</td>
      <td>{ele.client}</td>
      <td>{ele.contractor}</td>
      <td>{ele.max_x}</td>
      <td>{ele.min_y}</td>
      <td>{ele.max_y}</td>
      <td>{ele.min_y}</td>
      <td>{ele.max_z}</td>
      <td>{ele.min_z}</td>

    </tr>
      )
    })}



  </tbody>
</table>

     </div>
     
     </div> 
      
      
        )
}


export default Result