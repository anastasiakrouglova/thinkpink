import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'

const steps = 
    [
      {name: 'Welcome', component: <StepOne/>},
      {name: 'Description', component: <StepTwo/>},
      {name: 'Music', component: <StepThree/>},
      {name: 'Payment', component: <StepFour/>}
    ]

export { steps }