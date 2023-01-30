import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTaskContext } from '../../context/taskContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const SingleTask = () => {
  const { id } = useParams();
  const {item, loading} = useLocalStorage('taskList', [])
  const { currentTask } = useTaskContext();
  const [task, setTask] = useState<TSTask | null>()
  useEffect(()=> {
    if(currentTask){
      // si venimos de home
      setTask(currentTask)
    } else {
      // biscarla en local storage
      // const item = JSON.parse(window.localStorage.getItem('taskList')!)
      const findedTask = item?.find((task:TSTask) => task.id === Number(id))
      // fetch al server
      setTask(findedTask)
    }
  },[
    item
  ])
  if (loading) {
    return <>Loading...</>
  }
  if (!task) {
    return <>Tarea no encontrada.</>
  }
  return (
    <div>
      <h1>{task?.title}</h1>
    </div>
  );
};

export default SingleTask;
