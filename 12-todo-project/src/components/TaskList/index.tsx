import { ITask } from "../../App";

import styles from "./index.module.css";

export interface ITaskList {
    taskList: ITask[];
    handleDelete: (id: number) => void;
    handleEdit: (task: ITask) => void;
}

function TaskList({ taskList, handleDelete, handleEdit }: ITaskList) {
    if(taskList.length === 0)  {
        return(
            <div>
                <span>Não há tarefas cadastradas!</span>
            </div>
        );
    }

    return(
        <div>
            { taskList.map((task, index)=> (
                <div className={styles.task} key={`${task.id}-${index}`}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <button onClick={()=> handleDelete(task.id)}>Deletar</button>
                        <button onClick={()=> handleEdit(task)}>Editar</button>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default TaskList;