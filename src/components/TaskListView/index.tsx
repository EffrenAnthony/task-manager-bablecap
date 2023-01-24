import React, { useEffect } from 'react';
import { DrawerTask, TaskCard } from '..';
import stile from './TaskList.module.scss';
import { ToggleDrawerAction, useTaskContext } from '../../context/taskContext';
type TaskListViewProps = {
  taskList: TSTask[];
  loading: boolean;
  error: string;
  saveItem: (newItem: any) => void;
};
function TaskListView({
  taskList,
  loading,
  error,
  saveItem,
}: TaskListViewProps) {
  const {
    toggleDrawer,
    updateCurrentTask,
    updateDrawerChildren,
    setTaskListOnContext,
    taskList: taskListContext,
  } = useTaskContext();

  const setTaskOnDrawer = (task: TSTask) => {
    toggleDrawer(ToggleDrawerAction.DEFAULT);
    updateCurrentTask(task);
    updateDrawerChildren({
      children: <DrawerTask {...task} saveItem={saveItem} />,
    });
  };

  useEffect(() => {
    if (taskList.length > 0) {
      setTaskListOnContext(taskList);
    }
  }, [taskList]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error.trim() !== '' || taskList.length === 0) {
    return <p>Item not found</p>;
  }
  return (
    <div className={stile.taskListContainer}>
      {taskListContext.map((item, key) => {
        return (
          <div key={key} onClick={() => setTaskOnDrawer(item)}>
            <TaskCard
              // id={item.id}
              // title={item.title}
              // description={item.description}
              // portraitImage={item.portraitImage}
              // images={item.images}
              // state={item.state}
              {...item}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TaskListView;
