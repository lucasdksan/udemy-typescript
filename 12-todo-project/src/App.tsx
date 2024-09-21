import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import styles from "./index.module.css";

export interface ITask {
  id: number;
  title: string;
  difficulty: number;
}

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return(
    <div>
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
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 

export default App;
