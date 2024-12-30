import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", sal: "" })
  var navigate = useNavigate()
  var loc = useLocation()
  console.log(loc.state.val)
  
  
  
  const inputhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const addhandler = () => {
    if (loc.state !== null)
    {
      axios.put("http://localhost:3000/update/"+loc.state.val._id,input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    }
    else {
      axios.post("http://localhost:3000/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        })
    }
  }

  useEffect(() => {
    if (loc.state !== null)
      setinput({
        ...input,
        Name:loc.state.val.Name,
        Age:loc.state.val.Age,
        Dept:loc.state.val.Dept,
        sal:loc.state.val.sal
      })
  },[])     
      
  return (
    <div>
          <Typography variant='h3' align='center'>Add details</Typography>
          <TextField
        required
        id="outlined-required"
        label="Name"
        type='text'
        name='Name'
        value={input.Name}
        onChange={inputhandler}
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      
          <TextField
              required
              id="outlined-required"
        label="Age"
        name='Age'
        value={input.Age}
        onChange={inputhandler}
        
            
          />
          <br /><br />
          <TextField
              required
              id="outlined-required"
              label="Department"
        type='text'
        name='Dept'
        value={input.Dept}
        onChange={inputhandler}
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
              required
              id="outlined-required"
        label="Salary" 
        name='sal'
        value={input.sal}
        onChange={inputhandler}
          />
          <br /><br />
        <Button variant='contained' onClick={()=>{addhandler()}}>submit</Button>
    </div>
  )
}

export default Add
