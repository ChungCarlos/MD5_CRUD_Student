import logo from './logo.svg';
import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Login} from "./pages/home/Login";
import {Register} from "./pages/Register";
import {Detail} from "./pages/home/Detail";
import {List} from "./pages/home/List";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/detail'} element={<Detail/>}></Route>
                    <Route path={'/list'} element={<List/>}></Route>
                </Route>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </>
    );
}

export default App;
