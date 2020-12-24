import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Card from '@material-ui/core/Card';
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    };
  
    return { form, onChange };
};

export default function LoginPage() {
    const history = useHistory()
    const classes = useStyles();

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lincoln-Duarte/login"

    const {form, onChange} = useForm({ email: "", password:"" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
    }

    const login = () => {
        const body = {
          email: form.email,
          password: form.password
        }
    
        axios
        .post(url, body)
        .then((response) => { localStorage.setItem("token", response.data.token)
            history.push("/")
        })
        .catch((error) => { console.log(error) })
    }

    return <div>
        <Card variant="outlined">
            <Typography variant="h6" className="classes.title">
                Login
            </Typography>
            <form onSubmit={onSubmitForm}>
                <input
                value={form.email}
                placeholder={"Email"}
                onChange={handleInputChange}
                name={"email"}
                type={"email"}
                required
                />
                <br/>
                <input
                value={form.password}
                placeholder={"Senha"}
                onChange={handleInputChange}
                name={"password"}
                type={"number"}
                pattern={"[0-9]{6}"}
                required
                />
                <br/>
                <button>Enviar</button>
            </form>
            
        </Card>
    </div>
}