import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'
import { StepFive } from './StepFive'

const steps = 
    [
      {name: 'Welkom', component: <StepOne/>},
      {name: 'Beschrijving', component: <StepTwo/>},
      {name: 'Toevoegen', component: <StepThree/>},
      {name: 'Betaling', component: <StepFour /> },
      {name: 'Succes', component: <StepFive/>}
    ]

export { steps }