import React, { useState, useEffect } from 'react';
import {Header} from './containers';
import { IoMdTrash } from "react-icons/io";

import { Typography, Grid, Card, IconButton, Button,
  CardContent, TextField } from '@material-ui/core';

// import './requisition.css';

const  Requisition = () => {

  const bookDetails = {
    title:"",
    author:"",
    publisher:"",
    year:"",
    quantity:"",
    price:""
  };

  const [details, setDetails] = useState([bookDetails]);

  const userDetails = {
    name:"",
    email:"",
    phone:"",
    designation:"",
    dept_course:"",
    faculty:"",
    universityId:"",
    bookDescription:[]
  }

  const [user, setUser] = useState([userDetails]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const addBook = () => {
    setDetails([...details,bookDetails]);
  };

  const removeBook = (index) => {
    const filteredBook = [...details];
    filteredBook.splice(index, 1);
    setDetails(filteredBook);
  }

  const handleChange = (e,index) => {
    const updateBook = details.map((detail, i) => 
    index === i ?  
    Object.assign(detail, {[e.target.name]: e.target.value}) : detail 
    );
    setDetails(updateBook);
  }

  const handleUser = (e) =>{
    const {name, value} = e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit =(e) => {
    setUser({...user,bookDescription:[details]});
    e.preventDefault();
    // setFormErrors(validate(user));
    setIsSubmit(true);
    console.log(user);
  };

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length === 0 && isSubmit) {
      // console.log(user);
    }
  }, [user]);


  return (
    <>
    <Header /> 
    <div className='book_request'>
      <Typography gutterBottom variant="h4" align="center">
        Book Request Form
      </Typography>
      <Card style={{maxWidth:1080, 
                    margin:"2px Auto", 
                    padding:"20px 10px"}}>
      <form>
        <CardContent>
          <Typography gutterBottom variant="h5">Contact info</Typography>
          <Grid container spacing={4}>
            <Grid xs={12} sm={12} item>
              <TextField label='Full Name' 
              name='name' value={user.name}
              placeholder="Enter Your Full Name" 
              variant='outlined' onChange={(e) => handleUser(e)}
              fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField type='email' label='Email'
               name='email' value={user.email}
               placeholder="Enter Your Email address" 
              variant='outlined' onChange={handleUser}
              fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField type='number' label='Contact No'
              name='phone' value={user.phone} 
              placeholder="Enter Your Phone Number" 
              variant='outlined' onChange={handleUser}
              fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label='Designaton' 
              name='designation' value={user.designation}
              placeholder="Enter Your Phone Number" 
              variant='outlined' onChange={handleUser}
              fullWidth/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label='Department/Course' 
              name='dept_course' value={user.dept_course}
              placeholder="Enter Your Department/Course Name" 
              variant='outlined' onChange={handleUser}
              fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label='Faculty' 
              name='faculty' value={user.faculty}
              placeholder="Enter Your Faculty Name" 
              variant='outlined' onChange={handleUser}
              fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label='Unversity ID' 
              name='universityId' value={user.universityId}
              placeholder="Enter Your Enrollment/Employement ID" 
              variant='outlined' onChange={handleUser}
              fullWidth required/>
            </Grid>
          </Grid>

          <Typography variant="h5"
          style={{marginTop:8}}
            >Book Description</Typography>

          {details.map((detail,index) => (
            <Grid container spacing={2} key={index}
            style={{
              borderBottom:"1px solid black",
              margin:"6px 0px"
            }}
            >
              <Grid xs={12} sm={6} item md={5}>
                <TextField label='Book Name' 
                name='title'
                placeholder="Enter Your Book name with edition" 
                variant='outlined' 
                onChange={(e) => handleChange(e,index)}
                value={detail.title}
                fullWidth required />
              </Grid>
              <Grid item md={3}>
                <TextField label='Quantity' 
                name='quantity'
                placeholder="Enter Quantity of the Book" 
                variant='outlined' 
                onChange={(e) => handleChange(e,index)}
                value={detail.quantity}
                fullWidth/>
              </Grid>
              <Grid item md={3}>
                <TextField label='Price' 
                type='number'
                name='price'
                placeholder="Enter a Expected Price" 
                variant='outlined' 
                onChange={(e) => handleChange(e,index)}
                value={detail.price}
                fullWidth/>
              </Grid>
              <Grid xs={12} sm={6} item md={5}>
                <TextField label='Author Name' 
                name='author'
                placeholder="Enter Book Author Name" 
                variant='outlined' 
                onChange={(e) => handleChange(e,index)}
                value={detail.author}
                fullWidth required />
              </Grid>
              <Grid item md={3}>
                <TextField label='Publisher' 
                placeholder="Enter Publisher Name" 
                name='publisher'
                variant='outlined' 
                onChange={(e) => handleChange(e,index)}
                value={detail.publisher}
                fullWidth required />
              </Grid>
              <Grid item md={3}>
                <TextField label='Year' 
                name='year'
                placeholder="Enter Book Published Year" 
                variant='outlined' 
                onChange={(e) => handleChange(e,index)}
                value={detail.year}
                fullWidth/>
              </Grid>
              <Grid item md={1}>
                <IconButton>
                <IoMdTrash onClick={() => removeBook(index)}/>
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={3}>
            <Grid item md='auto'>
              <Button variant="contained" color='primary'
              onClick={addBook}>Add more</Button>
            </Grid>
            <Grid item direction='row-reverse' md='auto'>
              <Button variant="contained" color='primary'
              onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </CardContent>
        </form>
      </Card>
  </div>
  </>
  );
  
};


export default Requisition;
