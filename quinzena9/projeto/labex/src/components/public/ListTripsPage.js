import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ListTripsPage() {
    const history = useHistory()
    const [trip, setTrip] = useState([])
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lincoln-Duarte/trips"

    const getTheTrips = () => {
        axios
        .get(url)
        .then(response => {setTrip(response.data.trips)})
        .catch(erro => console.log(erro))
    }

    useEffect(() => {getTheTrips()}, [])

    return trip
}