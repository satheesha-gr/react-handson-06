import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import store from '../ContextAPI/StoreComponent';

const UpdateStudent = () => {

    const ContextData = useContext(store);
    const navi = useNavigate();
    const index = useLocation().state.data;
    
    const [name, setName] = useState(ContextData.entries[index].name);
    const [age, setAge] = useState(ContextData.entries[index].age);
    const [course, setCourse] = useState(ContextData.entries[index].course);
    const [batch, setBatch] = useState(ContextData.entries[index].batch);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateObj = { name, age, course, batch };
        ContextData.entries[index] = updateObj;
        navi('/students-data')
    }

    return (
      <div>
          <h1>Edit Student Data</h1>
          <form className='Form-Container'> <br/> <br/>
              <label>Name : <input type='text' placeholder={ContextData.entries[index].name} onChange={(e) => setName(e.target.value)} /> </label>
              <label>Age : <input type='text' placeholder={ContextData.entries[index].age} onChange={(e) => setAge(e.target.value)} /> </label> <br/><br/>
              <label>Course : <input type='text' placeholder={ContextData.entries[index].course} onChange={(e) => setCourse(e.target.value)} /> </label>
              <label>Batch : <input type='text' placeholder={ContextData.entries[index].batch} onChange={(e) => setBatch(e.target.value)} /> </label> <br/><br/>

              <div className='Submit-Data-Buttons'>
                  <Link to='/students-data' className='link'><button>Cancel</button></Link>
                  <button onClick={handleSubmit} >Update</button>
              </div>
          </form>
      </div>
    )
}

export default UpdateStudent