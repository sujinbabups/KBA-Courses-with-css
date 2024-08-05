import React from 'react'
import '../styles/Signupstyle.css'

const Signuppage = () => {
  return (
 <> 

<div className="signup-container">
  <div className="signup-form">
    <h2 className="signup-title">Sign Up</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" id="name" name="name" className="form-input" required/>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" name="email" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" id="password" name="password" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="userType" className="form-label">User Type:</label>
        <select id="userType" name="userType" className="form-select" required>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="form-button">Sign Up</button>
      </div>
      <p className="login-link">
        Already have an account? <a href="/" className="form-link">Login</a>
      </p>
    </form>
  </div>
</div>

    
 </>
  )
}

export default Signuppage
