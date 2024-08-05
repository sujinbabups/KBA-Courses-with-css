import React from 'react'
import '../styles/Loginstyle.css'
const Loginpage = () => {
    return (
        <>
           <div className="login-container">
    <div className="login-form">
        <h2 className="login-title">Login</h2>
       
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" className="form-input" required />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" id="password" name="password" className="form-input" required />
            </div>
            <div className="form-actions">
              <a href="/home"><input type="submit" value={'Login'} className="form-button"/></a> 
                <a href="#" className="form-link">Forgot Password?</a>
            </div>
            <p className="signup-link">
                Don't have an account? <a href="/sign-up" className="form-link">Sign Up</a>
            </p>
        
    </div>
</div>

        </>
    )
}

export default Loginpage
