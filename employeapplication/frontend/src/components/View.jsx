import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var [user, setuser] = useState([])
  var navigate =useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/view")
      .then((res) => {
        console.log(res.data)
        setuser(res.data)
      })
  }, [])
  const delval = (id) => {
    console.log(id)
    axios.delete("http://localhost:3000/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      })
  }
  const edival = (val) => {
    navigate("/add", { state: { val }})  
  }
    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontweight:"bold"}}>NAME</TableCell>
                <TableCell sx={{ fontweight:"bold" }} >AGE</TableCell>
                <TableCell sx={{fontweight:"bold"}}>DEPARTMENT</TableCell>
                <TableCell sx={{ fontweight: "bold" }}>SALARY</TableCell>
                <TableCell sx={{ fontweight: "bold" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((val) => {
                return (
                  <TableRow>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept}</TableCell>
                    <TableCell>{val.sal}</TableCell>
                    <TableCell>
                      <Button variant='contained' onClick={() => { delval(val._id) }}>delete</Button>&nbsp;&nbsp;
                      <Button variant='contained' onClick={() => { edival(val)}}>edit</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            
           
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }

export default View
