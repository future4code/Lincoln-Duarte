import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Button, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsFillHeartFill, BsFillXCircleFill, BsExclamationDiamondFill, BsFillChatDotsFill } from "react-icons/bs";

const Card = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  align-items: center;
  margin: 10px 450px;
`
const Imagem = styled.img`
  width: 300px;
  height: 240px;
`
const Like = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {
  const [perfil, setPerfil] = useState({})
  const [arraste, setArraste] = useState("")
  const [tela, setTela] = useState(true)
  const [matchs, setMatch] = useState([])

  useEffect(() => {pegaPerfil()}, [])

  const pegaPerfil = () => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/linquinho/person")
    .then((response) => {setPerfil(response.data.profile)})
    .catch((error) => {console.log(error.message)})
  }

  const juntaCasal = () => {
    const body = {
      id: perfil.id,
      choice: arraste
    }

    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/linquinho/choose-person", body)
    .then((response) => {pegaPerfil()
    pegaMatchs()})
    .catch((erro) => console.log(erro))
  }

  const pegaMatchs = () => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/linquinho/matches")
    .then((response) => {setMatch(response.data.matches)})
    .catch((erro) => {console.log(erro)})
  }

  const zerada = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/linquinho/clear")
    .then((response) => {setMatch(response.data.matches)})
    .catch((erro) => {console.log(erro)})
  }

  const escolhaDoSolteiro = (escolha) => {
    setArraste(escolha)
    juntaCasal()
  }

  const mudaTela = () => {
    setTela(!tela)
  }

  const mostraTela = () => {
    if(tela){
      return <Card >
        <Imagem src={perfil.photo}/>
        <span>{perfil.name}</span>
        <span>{perfil.age}</span>
        <p>{perfil.bio}</p>

        <Like>
          <Button variant="dark" onClick={() => {escolhaDoSolteiro(false)}}>dixlaikinha<BsFillXCircleFill/></Button>
          <Button variant="danger"onClick={() => {escolhaDoSolteiro(true)}}>Goxtinha<BsFillHeartFill/></Button>  
        </Like>
      </Card>
    }

    else{
      return <div>
        {matchs.map((match) => {
          return <Card>
            <Imagem src={match.photo}/>
            {match.name}
          </Card>
        })}
      </div>
    }
  }

  return <div className="App">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        AstroMatch
      </Navbar.Brand>
    </Navbar>
    {mostraTela()}
    <Like>
    <Button variant="secondary" onClick={zerada}><BsExclamationDiamondFill/></Button>
    <Button variant="secondary" onClick={mudaTela}>Match<BsFillChatDotsFill/></Button>
    </Like>
  </div>
}

export default App;
