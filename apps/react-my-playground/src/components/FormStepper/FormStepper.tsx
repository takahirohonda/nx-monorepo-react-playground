import { useState } from 'react'
import { Button, Grid, Step, StepLabel, Stepper } from '@mui/material'

const stepLabels = ['step 1', 'step 2', 'step 3']

export const FormStepper = () => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <Grid container direction="column">
      <Stepper activeStep={currentStep}>
        {stepLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="space-between">
        <Button
          color="primary"
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
        >
          Back
        </Button>
        <Button
          color="secondary"
          disabled={currentStep === stepLabels.length}
          onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  )
}
