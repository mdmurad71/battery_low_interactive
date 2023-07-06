


import React, { Fragment } from 'react'
import {Route, Routes } from 'react-router'
import StepOne from '../component/StepOne'
import StepTwo from '../component/StepTwo'
import Result from '../component/Result'

export default function Approute() {
  return (
    <Fragment>
        <Routes>

            <Route path='/' element={<StepOne/>}/>
            <Route path='/step' element={<StepTwo/>}/>
            <Route path='/result' element={<Result/>}/>



        </Routes>
    </Fragment>
  )
}