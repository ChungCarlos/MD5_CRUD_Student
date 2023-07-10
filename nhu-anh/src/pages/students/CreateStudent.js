import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
    name: Yup.string()
        .min(2,"Too Short!")
        .max(50,"Too Long!")
        .required("Required!"),
    age:Yup.string()
        .min(2,"Too Short!")
        .max(50,"Too Long!")
        .required("Required!"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required!"),
})

export function CreateStudent(){
    const navigate = useNavigate()
    return (
        <>
            <h1>Create Student:</h1>
            <Formik
                initialValues={{
                    name: '',
                    age: '',
                    email: ''
                }}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    axios.post('http://localhost:8888/api/v1/student/add', values).then(() => {
                        navigate('/') // dùng chuyển về trang chính
                        }
                    )
                }
            }
            >
                <Form className="form-container">
                    <Field name="name" className="form-field" placeholder="Enter Name:" />
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name="age" className="form-field" placeholder="Enter Age:" />
                    <ErrorMessage name={'age'}></ErrorMessage>
                    <Field name="email" className="form-field" placeholder="Enter Email:" />
                    <ErrorMessage name={'email'}></ErrorMessage>
                    <br/>
                    <button className="form-button">Save</button>
                </Form>
            </Formik>

        </>
    )
}