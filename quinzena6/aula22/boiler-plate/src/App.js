import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  display: flex;
  justify-content: space-between;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      inputDelete: '',
      editar: ''
    }

  componentDidUpdate() {
    const listadoUsuario = this.state.tarefas;
    const listaString = JSON.stringify(listadoUsuario);
    localStorage.setItem("listadoUsuario", listaString);
  };

  componentDidMount() {
    const listaString = localStorage.getItem("listadoUsuario");
    const listaArray = JSON.parse(listaString);
    if(listaArray){
      this.setState({tarefas: listaArray});
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value});
  }

  onChangeInputDelete = (event) => {
    this.setState({inputDelete:event.target.value});
  }

  onChangeEdit = (event) => {
    this.setState({editar:event.target.value});
  }

  criaTarefa = () => {
    if(this.state.inputValue){
      const novatarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      };
      const arraydetarefas = [...this.state.tarefas, novatarefa];
      this.setState({tarefas: arraydetarefas});
      this.setState({inputValue:""});
    }
  }

  apagarTodasTarefas = () => {
    this.setState({tarefas: []});
  }

  selectTarefa = (id) => {
    const arraydetarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        };
        return novaTarefa;
      }
      else{
        return tarefa;
      }
    })
    this.setState({tarefas: arraydetarefas});
  }

  apagarTarefa = () => {
    const arraydetarefas = this.state.tarefas.filter((tarefa) => {
      if(this.state.inputDelete !== tarefa.texto){
        return tarefa;
      }
    })
    this.setState({tarefas: arraydetarefas});
  }

  apagarTarefa = () => {
    const arraydetarefas = this.state.tarefas.filter((tarefa) => {
      if(this.state.inputDelete !== tarefa.texto){
        return tarefa;
      }
    })
    this.setState({tarefas: arraydetarefas});
  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const editlist = this.state.tarefas.map((tarefa) => {
      return(
      <option>pa</option>
      )
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <InputsContainer>
          <label>Editar</label>
          <select>
            {editlist}
          </select>
          <input value={this.state.editar} onChange={this.onChangeEdit}/>
          <button onClick={this.editarTarefa}>Editar</button>
        </InputsContainer>

        <InputsContainer>
          <label>Tarefa</label>
          <input value={this.state.inputDelete} onChange={this.onChangeInputDelete}/>
          <button onClick={this.apagarTarefa}>Apagar</button>
        </InputsContainer>

        <InputsContainer>
          <label>Tarefas</label>
          <button onClick={this.apagarTodasTarefas}>Apagar todas as tarefas</button>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
