import React, { useState } from 'react';
import Header from './Header';
import Add from './Add';
import Edit from './Edit';
import List from './List';
import { studentData } from '../data/studentData';
import Swal from 'sweetalert2';

function Dashboard() {
    const [students, setStudents] = useState(studentData);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        //console.log("id", id);
        const [student] = students.filter(student => student.id === id);

        setSelectedStudent(student);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        //console.log("id",id);
        Swal.fire({
            icon:'warning',
            title:'Are you sure?',
            text:'You wont be able to revert this!',
            showCancelButton:true,
            confirmButtonText:'Yes, delete it!',
            cancelButtonText:'No, cancel!'
        }).then(result => {
            if(result.value){
                const [student] = students.filter(student => student.id === id);
                Swal.fire({
                    icon:'success',
                    title:'Deleted!',
                    text:`${student.firstName} ${student.lastName} data has been deleted.`,
                    showConfirmButton:false,
                    timer:1500,
                });
                
                setStudents(students.filter(student => student.id !== id));
            }
        });
    }


  return (
    <div className='container'>
        {/*List */}
        {
            !isAdding && !isEditing &&(
                <>
                <Header setIsAdding = {setIsAdding} />
                <List 
                students = {students}
                handleEdit = {handleEdit}
                handleDelete = {handleDelete} />
                </>
            )
        }
        {/* adding */}
        {
            isAdding && (
                <Add 
                students = {students}
                setStudents = {setStudents}
                setIsAdding = {setIsAdding} />
            )
        }
        {/* Editing */}
        {
            isEditing && (
                <Edit 
                students = {students}
                selectedStudent = {selectedStudent}
                setStudents = {setStudents}
                setIsEditing = {setIsEditing} />
            )
        }
    </div>
  )
}

export default Dashboard;