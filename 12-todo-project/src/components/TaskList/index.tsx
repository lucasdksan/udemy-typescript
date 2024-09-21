import { ITask } from "../../App";

export interface ITaskList {
    taskList: ITask[];
}

function TaskList({ taskList }: ITaskList) {
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
                <div key={`${task.id}-${index}`}>
                    <div>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div>
                        <button>
                            <i className="bi bi-pencil"/>
                        </button>
                        <button>
                            <i className="bi bi-trash"/>
                        </button>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default TaskList;