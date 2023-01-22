

// in first method I used only Formik


import React from 'react';
import { useFormik } from 'formik';


const initialValues = {
             name:"",
            lastName:"",
            email:"",
            password:"",
}

const onSubmit = values =>{
    console.log(' form data', values)
}

//validation with Formik
const validate = values =>{
    
    //values.name
    //error.name
    //error.name= 'This field is required'

    // our 3 conditions:
    //1- must return an object
    // using name
    // string with error method

    let errors = {}

    if(!values.name) {
        errors.name= 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Email format is invalid'
    }

    if(!values.lastName) {
        errors.lastName= 'Required'
    }
    if(!values.email) {
        errors.email= 'Required'
    }
    if(!values.password) {
        errors.password= 'Required'
    }
    return errors
}


const FirstMethodForm = () => {
    const formik = useFormik({ 
        initialValues,
        onSubmit,
        // validationSchema
        validate
    })

    console.log('visited', formik.touched)
  return (
    <div className="container m-auto">
        <div className="row w-100 d-flex justify-content-center">
            <div className="col-4 glass p-5 shadow">
            <h4>First Method Form</h4>
                <form 
                className='form '
                onSubmit={formik.handleSubmit}
                 >
                        <div className='form-group my-2'>
                            <label htmlFor="name">Name</label>
                            <input 
                            className={`form-control ${ formik.touched.name && 'is-invalid'}`}
                             type="text"
                             id='name'
                             name='name'
                             onBlur={formik.handleBlur}
                             onChange={formik.handleChange}
                             value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                        </div>

                        <div className='form-group my-2'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className={`form-control ${ formik.touched.lastName && 'is-invalid'}`}
                             type="text"
                             id='lastName'
                             name='lastName'
                             onBlur={formik.handleBlur}
                             onChange={formik.handleChange}
                             value={formik.values.lastName}

                                />
                                {formik.touched.lastName && formik.errors.lastName ? <div className="error ">{formik.errors.lastName}</div> : null}
                        </div>

                        <div className='form-group my-2'>
                            <label htmlFor="email">Email</label>
                            <input className={`form-control ${formik.touched.email && 'is-invalid'}`}
                             type="email"
                             id='email'
                             name='email'
                             onBlur={formik.handleBlur}
                             onChange={formik.handleChange}
                             value={formik.values.email}

                                />
                                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                        </div>

                        <div className='form-group my-2'>
                            <label htmlFor="password">Password</label>
                            <input className={`form-control ${formik.touched.password && 'is-invalid'}`}
                             type="password"
                             id='password'
                             name='password'
                             onBlur={formik.handleBlur}
                             onChange={formik.handleChange}
                             value={formik.values.password}

                                />
                                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                        </div>

                        <button className='btn btn-primary my-2' type='submit ' >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FirstMethodForm