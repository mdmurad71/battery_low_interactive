


import React, { Fragment } from 'react'
import {Route, Routes } from 'react-router'
import StepOne from '../component/StepOne'
import StepTwo from '../component/StepTwo'

export default function Approute() {
  return (
    <Fragment>
        <Routes>

            <Route path='/' element={<StepOne/>}/>
            <Route path='/step' element={<StepTwo/>}/>


        </Routes>
    </Fragment>
  )
}