import React, { useState } from "react";
import ProtectPage from "../hooks/ProtectPage"
import axios from "axios"

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    };
  
    return { form, onChange };
}

export default function CreateTripPage() {
    ProtectPage()
    const {form, onChange} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        CreateTripPage()
    }

    const CreateTripPage = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lincoln-Duarte/trips', body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then()
        .catch(erro => (console.log(erro)))
    }

    return <div>
        CreateTripPage
        <form onSubmit={onSubmitForm}>
        <input
            value={form.name}
            placeholder={"Name"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            required
        />
        <input
            value={form.planet}
            placeholder={"Planet"}
            onChange={handleInputChange}
            name={"planet"}
            type={"text"}
            required
        />
        <input
            value={form.date}
            placeholder={"Date"}
            onChange={handleInputChange}
            name={"date"}
            type={"text"}
            required
        />
        <input
            value={form.description}
            placeholder={"Description"}
            onChange={handleInputChange}
            name={"description"}
            type={"text"}
            required
        />
        <input
            value={form.durationInDays}
            placeholder={"DurationInDays"}
            onChange={handleInputChange}
            name={"durationInDays"}
            type={"number"}
            required
        />
            <button>Enviar</button>
        </form>
    </div>
}
