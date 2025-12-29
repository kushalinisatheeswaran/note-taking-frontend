import React from 'react'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="profile-card">
        <h4 className='profile-title'>Profile</h4>
        <div className='profile-info'>
          <p><strong>Username: </strong>Ram kumar
          </p>
          <p><strong>Email: </strong>ram@gmail.com
          </p>
          <p><strong>contact: </strong>0762343212
          </p>
          <img src='https://placehold.co/600x400' alt='profile' className='profile-image'/>
          <input type='file' accept='image/*' className='form-input'></input>
          <button className='form-button'>Upload Profile Image</button>
        </div>
      </div>
    </div>
  )
}

export default Profile