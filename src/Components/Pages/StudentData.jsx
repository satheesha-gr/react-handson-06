import React, { useContext } from 'react'
import { store } from '../ContextAPI/StoreComponent'
import NavBar from '../Utilities/NavBar'
import { useNavigate, Link } from 'react-router-dom'
import './pages.css'

const StudentData = () => {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  return (
    <div>
        <NavBar/>

        <div className="data-table">
          <header className="header">
            <span className="title">Students Details</span>
            <button onClick={() => {Navi('/newstudent')}} >Add New Student</button>
          </header>

          <div>
            <table border={1} cellPadding={10} cellSpacing={0} className='table-data'>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {ContextData.entries.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.course}</td>
                      <td>{item.batch}</td>
                      <td> <Link to='/editstudent' state={{data: index}} >Edit</Link> </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default StudentData