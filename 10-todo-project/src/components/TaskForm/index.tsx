import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import { ITask } from "../../App";

interface ITaskForm {
    btnText: string;
    taskList: ITask[];
    task?: ITask | null;
    setTaskList?: (e: ITask[]) => void;
    handleUpdate?: (id: number, title: string, difficulty: number) => void;
}

function TaskForm({ btnText, taskList, task, setTaskList, handleUpdate }: ITaskForm) {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    useEffect(()=>{
        if(task) {
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    const handleAddTask = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        if(handleUpdate) {
            handleUpdate(id, title, difficulty);
        } else {
            const _id = Math.floor(Math.random() * 1000);
            const newTask: ITask = { id: _id, title, difficulty };
            
            setTaskList!([...taskList, newTask]);
            setDifficulty(0);
            setTitle("");
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=> {
        if(e.target.name === "title") setTitle(e.target.value);
        else setDifficulty(parseInt(e.target.value));
    }

    return (
        <form onSubmit={handleAddTask} className={styles.form}>
            <div className={styles["input-container"]}>
                <label htmlFor="title">Título: </label>
                <input value={title} type="text" onChange={handleChange} name="title" placeholder="Título da tarefa" />
            </div>
            <div className={styles["input-container"]}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input value={difficulty} type="text" onChange={handleChange} name="difficulty" placeholder="Dificuldade da tarefa" />
            </div>
            <button type="submit">{btnText}</button>
        </form>
    );
}

export default TaskForm;