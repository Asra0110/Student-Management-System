import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudents, setIsAdding}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollNo] = useState('');
  const [dob, setDate] = useState('');

  const textInput = useRef(null);

  useEffect(()=>{
    textInput.current.focus();
  }, [])

  const handelAdd = e => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !rollno || !dob){
      return Swal.fire({
        title: 'Error!',
        text: 'All fields are required',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
    const id = students.length+1;
    const newStudent = {
      id,
      firstName,
      lastName,
      email,
      rollno,
      dob
    }
    students.push(newStudent);
    setStudents(students);
    setIsAdding(false);
  

  Swal.fire ({
    icon: 'success',
    title:'Added',
    text:`${firstName} ${lastName} data has been Added.`,
    showConfirmButton:false,
    timer:1500
  });

  }
  return (
    <div className='small-container'>
      <form onSubmit={handelAdd}>
        <h1>Add Student</h1>
        <label htmlFor='firstName'>First Name</label>
        <input 
        id="firstName"
        type="text"
        ref={textInput}
        name="firstName"
        value={firstName}
        onChange={e=>setFirstName(e.target.value)} />
        <label htmlFor='lastName'>Last Name</label>
        <input 
        id='lastName'
        type='text'
        name='lastName'
        value={lastName}
        onChange={e=>setLastName(e.target.value)} />
        <label htmlFor='email'>Email Id</label>
        <input 
        id='email'
        type='email'
        name='email'
        value={email}
        onChange={e=>setEmail(e.target.value)} />
        <label htmlFor='rollno'>Roll No</label>
        <input
        id='rollno'
        type='text'
        name='rollno'
        value={rollno}
        onChange={e=>setRollNo(e.target.value)} />
        <label htmlFor='date'>Date of Birth</label>
        <input 
        id='dob'
        type='date'
        name='dob'
        value={dob}
        onChange={e=>setDate(e.target.value)} />
        <div style={{marginTop:'30px'}}>
          <input type='submit' value="Add" />
          <input 
          style={{marginLeft :'12px'}}
          className='muted-button'
          type='button'
          value='cancel'
          onClick={()=>setIsAdding(false)} />
        </div>
      </form>
    </div>
  );
}

export default Add;