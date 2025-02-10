import React from 'react'
import './Studentstyle.css';


function Student({data}) {
  return (
        
        <div className="icard">

            {/* {
                JSON.stringify(data)
            } */}








            <table>
                <tbody>
                    <tr><td colSpan={2}>{data.college}</td></tr>
                    <tr><td colSpan={2}>{<img src={data.pic} height={100} alt='student pic' />}</td></tr>
                    <tr><td>Roll:</td><td>{data.roll}</td></tr>
                    <tr><td>Name:</td><td>{data.name}</td></tr>
                    <tr><td>Branch:</td><td>{data.branch}</td></tr>
                    <tr><td>Section:</td><td>{data.section}</td></tr>
                </tbody>
            </table>








            {/* <div className="image">
            <img src="https://images.unsplash.com/photo-1584367369853-8b966cf223f4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
        </div> */}
        {/* <h2>Hii , {props.name}</h2>
        <br /><br />
        Your Branch is {props.branch} */}
        </div>
  )
  

}
// Student.defaultProps={
//     college:"IIT DELHI"
//   }

export default Student