import React, { useEffect, useState } from 'react';
import defaultTasks from '../../mocks/tasks';
import { TaskListView, ModalComponent } from '../../components';


function HomeComponent() {
  const [taskList, setTaskList] = useState<TSTask[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const [number, setNumber] = useState<number>(0);
  // const [show, setShow] = useState<boolean>(false);
  // console.log('render');
  // let number = 0;
  // fetch
  useEffect(() => {
    setTimeout(() => {
      setTaskList(defaultTasks);
    }, Math.floor(Math.random() * 5000) + 1000);
  }, [taskList]);
  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button type="button"
          onClick={()=> {
            setOpenModal(true)
          }}
        >Nueva Tarea</button>
      </div>
      <TaskListView taskList={taskList} />
      <div />
      <ModalComponent 
        modalIsOpen={openModal}
        closeModal={() => {
          setOpenModal(false)
        }}
        title="New Task"
      >
        <h1>Contenido</h1>
        <h1>Contenido</h1>
        <h1>Contenido</h1>
        
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
