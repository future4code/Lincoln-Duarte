import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

export default function HomePage() {
    const history = useHistory()
    const authorization  = window.localStorage.getItem('token')

    const goToLoginPage = () => {
        history.push("/Login")
    }

    const goToApplicationFormPage = () => {
        history.push("/application-form")
    }

    const goToTripsDetailsPage = () => {
        
        history.push("/trips/details")
    }

    const goToCreateTripsPage = () => {

        history.push("/trips/create")
    }

    const tokenlogin = () => {
        window.localStorage.removeItem('token')
    }

    return <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="classes.title">
                    Labex
                </Typography>
                <Button color="inherit" onClick={goToApplicationFormPage}>Application Form</Button>
                {authorization && <Button color="inherit" onClick={goToTripsDetailsPage}>Trip details</Button>}
                {authorization && <Button color="inherit" onClick={goToCreateTripsPage}>CreateTripPage</Button>}
                {authorization ? <Button color="inherit" onClick={tokenlogin}>Logout</Button> : <Button color="inherit" onClick={goToLoginPage}>Login</Button>}
            </Toolbar>
        </AppBar>
        </div>
}