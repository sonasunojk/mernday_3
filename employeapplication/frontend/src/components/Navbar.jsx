import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6">Home</Typography>
                  <Link to='/add'>
                      <Button variant='contained' color='primary'>Add</Button>&nbsp;
                  </Link>

                  <Link to='/view'>
                      <Button variant='contained' color='primary'>view</Button>&nbsp;
                  </Link>
              </Toolbar>
              
      </AppBar>
    </div>
  )
}

export default Navbar
