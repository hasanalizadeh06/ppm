import React from 'react'

function page() {
  return (
    <form className="login-form">
      <h2 className="login-title">Admin Login</h2>
      <label className="login-label">
        Username
      <input className="login-input" type="text" name="username" required />
      </label>
      <label className="login-label">
        Password
      <input className="login-input" type="password" name="password" required />
      </label>
      <button className="login-button" type="submit">Login</button>
    </form>
  )
}

export default page