import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import Swal from "sweetalert2";


export function EditStudent() {
    const {id} = useParams();
    const [list, setList] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    });
    const navigate = useNavigate();
    useEffect(() => {
        axios.patch('http://localhost:8888/api/v1/student/' + id).then((response) => {
            setList({id: response.data.id, name: response.data.name,age: response.data.age, email: response.data.email});
        }).then(() => {
        })
    }, []);
    useEffect(() => {
        console.log('re-render');
    })
    return (
        <>
            <Formik
                initialValues={{
                    id: list.id,
                    name: list.name,
                    age: list.age,
                    email: list.email,
                }}
                onSubmit={(values) => {
                    console.log('save', values);
                    axios.put('http://localhost:8888/api/v1/student/update/' + id,values).then((response) => {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    ).then(() => {
                        setTimeout(() => navigate('/'), 1500)
                    })
                }}
                enableReinitialize={true}
            >
                <Form style={{textAlign: 'left'}}>
                    <table>
                        <tbody>
                        <tr hidden={true}>
                            <th>Id:</th>
                            <td><Field name={'id'}></Field></td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td><Field name={'name'}></Field></td>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <td><Field name={'age'}></Field></td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td><Field name={'email'}></Field></td>
                        </tr>
                        </tbody>
                    </table>
                    <button>Update</button>
                </Form>
            </Formik>
        </>
    )
}


