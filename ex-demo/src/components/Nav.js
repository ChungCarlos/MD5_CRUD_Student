import {Link} from "react-router-dom";

export default function Nav(){
    return(
        <>
            <h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            </h1>
            <hr/>
        </>
    )
}