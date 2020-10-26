import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    Post: [],
    valorUsuario: "",
    valorFoto: "",
    valorLink: ""
  }

  addPosts = () => {
    const novoPost = {
    valorUsuario: this.state.valorUsuario,
    valorFoto: this.state.valorFoto,
    valorLink: this.state.valorLink
    }
    
    const novoPosts = [...this.state.Post, novoPost]
    this.setState({Post: novoPosts})
    this.state.valorLink = ""
    this.state.valorFoto = ""
    this.state.valorUsuario = ""
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorUsuario: event.target.value})
  }
  
  onChangeInputFoto = (event) => {
    this.setState({valorFoto: event.target.value})
  }

  onChangeInputLink = (event) => {
    this.setState({valorLink: event.target.value})
  }

  render() {
    const Posted = this.state.Post.map((postagem) => {
    return(
      <Post
          nomeUsuario={postagem.valorUsuario}
          fotoUsuario={postagem.valorFoto}
          fotoPost={postagem.valorLink}
        />
    )
    })

    return (
      <div className={'app-container'}>
        <div>
        <input value={this.state.valorUsuario} onChange={this.onChangeInputUsuario} placeholder="Nome de Usuario"/>
        <input value={this.state.valorFoto} onChange={this.onChangeInputFoto} placeholder="Foto de Usuario"/>
        <input value={this.state.valorLink} onChange={this.onChangeInputLink} placeholder="Link da foto"/>
        <button onClick={this.addPosts}>enviar</button>
        </div>

        <div>
          {Posted}
        </div>
        <Post
          nomeUsuario={"oiiiii"}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Joãozinho'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'paulinhogameplays'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/152'}
        />

      </div>
    );
  }
}

export default App;
