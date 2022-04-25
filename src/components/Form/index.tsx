import React from 'react';
import { ITarefas } from '../../types/tarefas';
import Button from "../Button";
import StyleForm from './Form.module.scss';

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
    }
    render() {
        return (
            <form className={StyleForm.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={StyleForm.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={StyleForm.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;