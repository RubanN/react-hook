import React from 'react'

export default function Login() {
    return (
        <>
        <form onSubmit={e=>{e.preventDefault()}}>
            <label htmlFor="UserName">User Name:</label>
                <input type="text" name="login-username" id="login-username"/><br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="login-password" id="login-password"/>
                {/* <input type="submit" value="Login" /> */}
        </form>
        </>
    )
}
