import React from 'react'

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Students Management System</h1>
      <div style={{ marginTop:'20px' , marginBottom: '20px'}}>
        <button className='round-button' 
        onClick={ () => setIsAdding(true)}>Add Student</button>
      </div>
    </header>
  )
}

export default Header;