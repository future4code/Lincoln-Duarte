import React, { useState } from "react"
import ListTripsPage from './ListTripsPage'
import axios from "axios"
import {AplicationCard, Backscreen, UserInput, SelectInput, ButtonApplication, Logo} from "../styles/ApplicationFormPageStyle"

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    };
  
    return { form, onChange };
}

export default function ApplicationFormPage() {
    const {form, onChange} = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip:""
    })
    const trips = ListTripsPage()

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lincoln-Duarte/trips/${form.trip}/apply`, body)
        .catch(erro => (console.log(erro)))
    }

    return <Backscreen>
        <AplicationCard onSubmit={onSubmitForm}>
        <Logo>ApplicationFormPage</Logo>
        <UserInput
            value={form.name}
            placeholder={"Name"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            required
        />
        <UserInput
            value={form.age}
            placeholder={"Age"}
            onChange={handleInputChange}
            name={"age"}
            type={"number"}
            pattern={"[0-9]{6}"}
            required
        />
        <UserInput
            value={form.applicationText}
            placeholder={"why do you want to travel"}
            onChange={handleInputChange}
            name={"applicationText"}
            type={"text"}
            required
        />
        <UserInput
            value={form.profession}
            placeholder={"Profissão"}
            onChange={handleInputChange}
            name={"profession"}
            type={"text"}
            required
        />
        <UserInput
            value={form.country}
            placeholder={"country"}
            onChange={handleInputChange}
            name={"country"}
            type={"text"}
            required
        />
        <SelectInput
            onChange={handleInputChange}
            name={"trip"}
        >
            {trips.map(trip => {
                return <option value={trip.id}>{trip.name}</option>
            })}
        </SelectInput>
        <ButtonApplication>Enviar</ButtonApplication>
        </AplicationCard>
    </Backscreen>
}