import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudents, setIsEditing }) {

  const id = selectedStudent.id;

  const [firstName, setFirstName] = useState(selectedStudent.firstName);
  const [lastName, setLastName] = useState(selectedStudent.lastName);
  const [email, setEmail] = useState(selectedStudent.email);
  const [rollno, setRollNo] = useState(selectedStudent.rollno);
  const [dob, setDate] = useState(selectedStudent.dob);

  const handelUpdate = e => {
    e.preventDefault();

    if(!firstName || !lastName || !email || !rollno || !dob){
      return Swal.fire({
        icon:'error',
        title:'Error!',
        text:'All fields are required.',
        showConfirmButton:'OK'
      });
    }

    const student = {
      id,
      firstName,
      lastName,
      email,
      rollno,
      dob
    };

    for(let i=0; i<students.length; i++){
      if(students[i].id === id){
        students.splice(i, 1, student);
        break;
      }
    }
    setStudents(students);
    setIsEditing(false);

    Swal.fire({
      icon:'success',
      title:'Edited!',
      text: `${firstName} and ${lastName} data has been Edited.`,
      showConfirmButton: false,
      timer:1500
    });

  }


  return (
    <div className='small-container'>
      <form onSubmit={handelUpdate}>
        <h1>Edit Student Details</h1>
        <label htmlFor='firstName'>First Name</label>
        <input 
        id='firstName'
        type='text'
        name='firstName'
        value={firstName}
        onChange={e=> setFirstName(e.target.value)} />
        <label htmlFor='lastName'>Last Name</label>
        <input
        id='lastName'
        type='text'
        name='lastName'
        value={lastName}
        onChange={e=>setLastName(e.target.value)} />
        <label htmlFor='email'>Email</label>
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
        <label htmlFor='dob'>Date of Birth</label>
        <input
        id='dob'
        type='date'
        name='dob'
        value={dob}
        onChange={e=>setDate(e.target.value)} />

        <div style={{ marginTop: '30px '}}>
        <input type='submit' value='Update' />
        <input 
        style={{ marginLeft: '12px' }}
        className='muted-button'
        type='button'
        value='Cancel'
        onClick={()=> setIsEditing(false)} />
        </div>
      </form>
    </div>
  )
}

export default Edit;