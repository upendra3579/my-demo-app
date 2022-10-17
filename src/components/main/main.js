import React, {useEffect,useState} from 'react'
import Postdetails from '../postdetails/postdetails'
import Posts from '../posts/posts'
import Users from '../users/users'
import {Routes,Route} from 'react-router-dom';

function Main() {
    let [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/")
    .then(response => response.json())
    .then(data => setDetails(data))
  },[])
  return (
    <div>
       <switch>
      <Routes>
          <Route path='/posts' element={<Posts posts ={details} />} />
          <Route path="/users" element={<Users  users ={details}/>} />
          <Route path="/postdetails" element={<Postdetails postsdetails ={details} />} />
      </Routes>
      </switch>
    </div>
  )
}

export default Main