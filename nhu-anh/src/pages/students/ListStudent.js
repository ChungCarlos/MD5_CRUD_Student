import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


export function ListStudent() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8888/api/v1/student/all').then(res => {
            setList(res.data)
        })
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:8888/api/v1/student/delete/'+id).then((response) => {
                    console.log(response)
                    Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your file has been deleted.',
                            showConfirmButton: false,
                            timer: 1500
                        }
                    )
                    if (response.status === 200) {
                        setList(list.filter(s => (s.id !== id)))
                    }
                })
            }
        })
    }

    return (
        <>
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {list.map((item,key) => {
                    return (
                        <tr>
                            <td><Link to={'/edit-student/'+item.id}>{item.id}</Link></td>
                            <td><Link to={'/edit-student/'+item.id}>{item.name}</Link></td>
                            <td><Link to={'/edit-student/'+item.id}>{item.age}</Link></td>
                            <td><Link to={'/edit-student/'+item.id}>{item.email}</Link></td>
                            <td><button onClick={() => {
                                handleDelete(item.id)
                            }
                            }>Delete</button></td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </>
    )
}