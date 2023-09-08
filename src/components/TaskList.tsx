import { Component } from 'react';

class Tarea {
  constructor(public nombre: string, public fechaVencimiento: string, public completada: boolean = false) {}
}

interface TaskListState {
  nuevasTareas: Tarea[];
  nombreTarea: string;
  fechaVencimientoTarea: string;
}

class TaskList extends Component<{}, TaskListState> {
  state: TaskListState = {
    nuevasTareas: [],
    nombreTarea: '',
    fechaVencimientoTarea: '',
  };

  agregarTarea = () => {
    const { nombreTarea, fechaVencimientoTarea } = this.state;
    if (nombreTarea.trim() === '' || fechaVencimientoTarea.trim() === '') {
      return; // No se permiten tareas vacías
    }

    const nuevaTarea = new Tarea(nombreTarea, fechaVencimientoTarea);
    this.setState((prevState) => ({
      nuevasTareas: [...prevState.nuevasTareas, nuevaTarea],
      nombreTarea: '',
      fechaVencimientoTarea: '',
    }));
  };

  completarTarea = (index: number) => {
    this.actualizarTarea(index, true);
  };

  eliminarTarea = (index: number) => {
    this.setState((prevState) => {
      const nuevasTareas = [...prevState.nuevasTareas];
      nuevasTareas.splice(index, 1);
      return { nuevasTareas };
    });
  };

  actualizarTarea = (index: number, completada: boolean) => {
    this.setState((prevState) => {
      const nuevasTareas = [...prevState.nuevasTareas];
      nuevasTareas[index].completada = completada;
      return { nuevasTareas };
    });
  };

  render() {
    const { nuevasTareas, nombreTarea, fechaVencimientoTarea } = this.state;

    return (
      <div>
        <h2>Lista de Tareas</h2>
        <div className='form-task'>
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={nombreTarea}
            onChange={(e) => this.setState({ nombreTarea: e.target.value })}
          />
          <input
            type="date"
            placeholder="Fecha de vencimiento"
            value={fechaVencimientoTarea}
            onChange={(e) => this.setState({ fechaVencimientoTarea: e.target.value })}
          />
          <button onClick={this.agregarTarea}>Agregar Tarea</button>
        </div>
        <ul>
          {nuevasTareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre} - Fecha de Vencimiento: {tarea.fechaVencimiento}{' '}
              {tarea.completada ? '(Completada)' : ''}
              <button onClick={() => this.completarTarea(index)}>Completar</button>
              <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
