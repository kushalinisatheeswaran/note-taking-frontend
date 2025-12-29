import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h2 className='dashboard-title'>My Notes</h2>
      <p className='error'></p>
      <div className='note-input-container'>
        <textarea className='note-textarea' placeholder='Write your note here...'></textarea>
        <button className='form-button'>create Note</button>
      </div>
      <div className='notes-grid'>
        <div className='notes-card'>
          <p className='notes-text'> Notes will appear here</p>
          <p className='notes-date'>29-12-2025</p>
        
        <div className='notes-actions'>
          <button className='notes-edit'>Edit</button>
          <button className='notes-delete'>Delete</button> 
      </div>
      </div>
      </div>
      </div>
  )
}

export default Dashboard