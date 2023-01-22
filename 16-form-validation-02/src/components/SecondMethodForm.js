

//in second methd I used Components and yup





import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
             name:"",
            lastName:"",
            email:"",
            password:"",
}

const onSubmit = values =>{
    console.log(' form data', values)
}

const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    lastName:Yup.string().required('Required!'),
    email:Yup.string()
    .required('Required!')
    .email('Invalid email error')
    ,
    password:Yup.string().required('Required!'),
})

const SeconMethodForm = () => {
    
  return (
    <div className="container m-auto">
        <div className="row w-100 d-flex justify-content-center">
            <div className="col-md-4 glass p-5 shadow">
            <h4>Second Method Form</h4>
            <Formik 
            initialValues ={initialValues}
            validationSchema = {validationSchema}
            onSubmit={onSubmit}
            >
                <Form 
                className='form '
                 >
                        <div className='form-group my-2'>
                            <label htmlFor="name">Name</label>
                            <Field 
                            className="form-control"
                             type="text"
                             id='name'
                             name='name'
                             
                                />
                                <dir className='error'><ErrorMessage  name="name"/></dir>
                        </div>

                        <div className='form-group my-2'>
                            <label htmlFor="lastName">Last Name</label>
                            <Field className="form-control"
                             type="text"
                             id='lastName'
                             name='lastName'
                             
                                />
                                <dir className='error'><ErrorMessage  name="lastName"/></dir>
                        </div>

                        <div className='form-group my-2'>
                            <label htmlFor="email">Email</label>
                            <Field className="form-control"
                             type="email"
                             id='email'
                             name='email'
                                />
                                <dir className='error'><ErrorMessage  name="email"/></dir>
                        </div>

                        <div className='form-group my-2'>
                            <label htmlFor="password">Password</label>
                            <Field className="form-control"
                             type="password"
                             id='password'
                             name='password'
                            
                                />
                               <dir className='error'><ErrorMessage  name="password"/></dir>
                        </div>

                        <button className='btn btn-primary my-2' type='submit ' >Submit</button>
                </Form>
            </Formik>
            </div>
        </div>
    </div>
  )
}

export default SeconMethodForm