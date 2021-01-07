import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./public/HomePage"
import ApplicationFormPage from "./public/ApplicationFormPage"
import ListTripsPage from "./public/ListTripsPage"
import LoginPage from "./adm/LoginPage"
import TripDetailsPage from "./adm/TripDetailsPage"
import CreateTripPage from "./adm/CreateTripPage"

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/application-form">
                <ApplicationFormPage/>
            </Route>

            <Route exact path="/login">
                <LoginPage/>
            </Route>

            <Route exact path="/trips/list">
                <ListTripsPage/>
            </Route>

            <Route exact path="/trips/create">
                <CreateTripPage/>
            </Route>

            <Route exact path="/trips/details">
                <TripDetailsPage/>
            </Route>
        </Switch>
    </BrowserRouter>
}
