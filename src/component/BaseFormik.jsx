import { Formik , Form ,Field , ErrorMessage,useFormik } from 'formik'
import * as yup from 'yup'
import React, { useState } from 'react'
import style from './BaseFormik.module.css'

const BaseFormik = ({allCard , setAllCard}) => {
    const [product , setProduct] = useState([]);

    const validation = yup.object().shape({
        name:yup.string(),
        id:yup.string()
        })

    const onSubmit = (values,{setSubmitting}) =>{
        setProduct([...product,values])
        console.log(product);
        setTimeout(()=>{setSubmitting(false)},3000)
        setAllCard([...allCard,values])
    }

    const form = useFormik({
        initialValues:{name:'',id:''},
        onSubmit:{onSubmit},
        validationSchema:{validation}
    })


    
  return (
    <div>
        <Formik onSubmit={onSubmit} initialValues={{name:'',id:''}} validationSchema={validation}>
            {({handleSubmit,values,handleChange,isSubmitting})=>(
                <form onSubmit={handleSubmit} className={style.test} >
                    <input type='text' name='name' value={values.name} onChange={handleChange} placeholder='name'/>
                    <ErrorMessage name='name'/>
                    <div></div>
                    <input type='text' name='id' value={values.id} onChange={handleChange} placeholder='id'/>
                    <ErrorMessage name='id'/>
                    <div></div>
                    <button type='submit' disabled={isSubmitting}>submit</button>
                </form>
            )}
        </Formik>
    </div>
  )
}

export default BaseFormik