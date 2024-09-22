import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import styles from "./index.module.css";
import Modal from "./components/Modal";

export interface ITask {
  id: number;
  title: string;
  difficulty: number;
}

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  } 

  const onShowModal = (display: boolean)=> {
    const modal = document.querySelector("#modal");
    
    if(display) {
      modal?.classList.remove("hide");
    } else {
      modal?.classList.add("hide");
    }
  }

  const editTask = (task: ITask)=> {
    onShowModal(true);
    setTaskUpdate(task);
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList([...updatedItems]);
    onShowModal(false);
  }

  return(
    <div>
      <Modal>
        <TaskForm btnText="Editar Tarefa" taskList={taskList} task={taskUpdate} handleUpdate={updateTask}  />
      </Modal>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <p>formulário</p>
          <TaskForm taskList={taskList} btnText="Criar tarefa" setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <p>lista</p>
          <TaskList handleEdit={editTask} handleDelete={deleteTask} taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 

export default App;
