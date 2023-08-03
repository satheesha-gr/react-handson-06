import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import store from '../ContextAPI/StoreComponent'
import StudentData from '../Pages/StudentData'
import UpdateStudent from '../Pages/UpdateStudent'
import AddNewStudent from '../Pages/AddNewStudent'
import ContactUs from '../Pages/ContactUs'
import ErrorPage from '../Pages/ErrorPage'

const RouterComponent = () => {

  const [data, setData] = useState([
    {name: "Satheesh", age: 23, course: "MERN", batch: "EA23"},
    {name: "Rakshith", age: 24, course: "MERN", batch: "EA21"},
    {name: "Bharath", age: 25, course: "MEAN", batch: "EA25"},
    {name: "Kushal", age: 24, course: "MEAN", batch: "EA28"},
    {name: "Nikith", age: 25, course: "MEAN", batch: "EA21"},
    {name: "Madhu", age: 26, course: "MEVN", batch: "EA20"}
  ])

  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home/>} />

                <Route path="/students-data" element={
                  <store.Provider value={{entries: data, entriesFun: setData}}>
                    <StudentData />
                  </store.Provider>
                } />
                    
                <Route path="/editstudent" element={
                  <store.Provider value={{entries: data, entriesFun: setData}}>
                    <UpdateStudent />
                  </store.Provider>
                } />
                
                <Route path="/newstudent" element={
                  <store.Provider value={{entries: data, entriesFun: setData}}>
                    <AddNewStudent />
                  </store.Provider>
                } />

                <Route path='/contact-us' element={<ContactUs />} />
                
                <Route path='/*' element={<ErrorPage />} />
            
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterComponent