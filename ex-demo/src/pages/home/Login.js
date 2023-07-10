import {Link, Route, Routes} from "react-router-dom";

export function Login(){
    return (
        <>
            <h1>Login</h1>
            <Link to={'/register'}>Register</Link><br/>
            <Link to={'/'}>Back Home</Link>
            <hr/>
        </>
    )
}