import ProtectPage from "../hooks/ProtectPage"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ListTripsPage from '../public/ListTripsPage'
import {Card, Backscreen, SelectInput, ButtonApplication, Logo, TripDetail, TripButton, Triplist} from "../styles/TripDetailsPage"


export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    };
  
    return { form, onChange };
};

export default function TripDetailsPage() {
    ProtectPage()

    const {form, onChange} = useForm({
        trip:""
    })

    const [tripDetails, onChangeTripDetails] = useState("")
    const trips = ListTripsPage()

    const getTheTripDetails = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lincoln-Duarte/trip/${form.trip}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
            
        })
        .then(Response => (onChangeTripDetails(Response.data.trip)))
        .catch(erro => (console.log(erro)))
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        getTheTripDetails()
    }

    const choosingPassagers = (candidate, decision) => {
        const body = {
            "approve": decision
        }

        axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lincoln-Duarte/trips/${tripDetails.id}/candidates/${candidate}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then(getTheTripDetails())
        .catch(erro => {console.log(erro)})
    }

    const userscreen = () =>{
        if(tripDetails){
            return <Triplist>
                <TripDetail>Data: {tripDetails.date}</TripDetail>
                <TripDetail>Descrição: {tripDetails.description}</TripDetail>
                <TripDetail>Duração: {tripDetails.durationInDays}</TripDetail>
                <TripDetail>ID: {tripDetails.id}</TripDetail>
                <TripDetail>Name: {tripDetails.name}</TripDetail>
                <TripDetail>planet: {tripDetails.planet}</TripDetail>
                <TripDetail>
                    Candidatos: 
                    {tripDetails.candidates.map(array => {
                        return <div>
                            <p>ID: {array.id}</p>
                            <p>Nome: {array.name}</p>
                            <p>Resumo: {array.applicationText}</p>
                            <p>País: {array.country}</p>
                            <p>Profissão: {array.profession}</p>
                            <TripButton onClick={()=> {choosingPassagers(array.id, true)}}>aprovar</TripButton><TripButton onClick={()=> {choosingPassagers(array.id, false)}}>reprovar</TripButton>
                            <p>///////////////////</p>
                        </div>
                    })}
                </TripDetail>
            </Triplist>
        }
    }

    return <Backscreen>
        
        <Card onSubmit={onSubmitForm}>
            <Logo>Trip Details</Logo>
            <SelectInput
                onChange={handleInputChange}
                name={"trip"}
            >
                {trips.map(trip => {
                    return <option value={trip.id}>{trip.name}</option>
                })}
            </SelectInput>
            <ButtonApplication>Enviar</ButtonApplication>
            {userscreen()}
        </Card>
        
    </Backscreen>
}