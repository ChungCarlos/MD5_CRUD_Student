import Nav from "../../components/Nav";
import {Link, Outlet} from "react-router-dom";
import {Header} from "../../components/Header";

export function Home(){
    return (
        <>
            <Nav/>
            <Header/>
            <Link to={'/list'}>My List</Link> |
            <Link to={'/detail'}>Detail Produce</Link>
            <Outlet/>
            <hr/>
        </>
    )
}