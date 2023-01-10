import React, { useEffect, useState } from 'react';
import defaultTasks from '../../mocks/tasks';
import { TaskListView, ModalComponent, CreateTaskForm } from '../../components';
import useLocalStorage from '../../hooks/useLocalStorage';


function HomeComponent() {
  const [taskList, setTaskList] = useState<TSTask[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  // YA QUE USAMOS UN USE EFFECT EN USELOCALSTORAGE, 
  // ESTE TIENE QUE ESTAR A LA ALTURA DEL COMPONENTE
  // QUE RENDERIZA LOS TASK, SINO NO VA A ACTUALIZARLOS
  // PORQUE EL RENDER SERA SOLO DEL COMPONENTE DONDE SE USÓ EL HOOK
  const { item, saveItem } = useLocalStorage('taskList', [])
  // const [number, setNumber] = useState<number>(0);
  // const [show, setShow] = useState<boolean>(false);
  // console.log('render');
  // let number = 0;
  // fetch
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTaskList(defaultTasks);
  //   }, Math.floor(Math.random() * 5000) + 1000);
  // }, [taskList]);

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button type="button"
          onClick={handleOpenModal}
        >Nueva Tarea</button>
      </div>
      <TaskListView taskList={item! as TSTask[]} />
      <div />
      <ModalComponent 
        modalIsOpen={openModal}
        closeModal={handleOpenModal}
        title="New Task"
      >
        <CreateTaskForm
        saveItem={saveItem}
        item={item}
        closeModal={handleOpenModal}
        />
        
      </ModalComponent>
    </div>
  );
}

export default HomeComponent;

/*
        <button
          type="button"
          onClick={() => {
            // setNumber(number + 1);
            // console.log(number);
            // number += 1;
            // setShow(!show);
          }}
        >
          +
        </button>
        {show && (
          <>
            {number}
            ITem
          </>
        )}

        */
