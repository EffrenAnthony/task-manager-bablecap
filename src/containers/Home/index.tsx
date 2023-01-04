import React, { useEffect, useState } from 'react';
import defaultTasks from '../../mocks/tasks';
import { TaskListView } from '../../components';

function HomeComponent() {
  const [taskList, setTaskList] = useState<TSTask[]>([]);
  // const [number, setNumber] = useState<number>(0);
  // const [show, setShow] = useState<boolean>(false);
  // console.log('render');
  // let number = 0;
  // fetch
  useEffect(() => {
    setTimeout(() => {
      setTaskList(defaultTasks);
    }, 5000);
  }, [taskList]);
  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button type="button">Nueva Tarea</button>
      </div>
      <TaskListView taskList={taskList} />
      <div />
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
