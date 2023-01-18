import React from 'react';
import { DrawerTask, TaskCard } from '..';
import stile from './TaskList.module.scss';
import { useTaskContext } from '../../context/taskContext';
type TaskListViewProps = {
  taskList: TSTask[];
  loading: boolean;
  error: string;
};
function TaskListView({ taskList, loading, error }: TaskListViewProps) {
  const { toggleDrawer, updateCurrentTask, updateDrawerChildren } = useTaskContext();

  const setTaskOnDrawer = (task:TSTask) => {
    toggleDrawer()
    updateCurrentTask(task)
    updateDrawerChildren({
      children: <DrawerTask {...task}/>
    })
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error.trim() !== '') {
    return <p>{error}</p>;
  }
  return (
    <div className={stile.taskListContainer}>
      {taskList.map((item, key) => {
        return (
          <div
            key={key}
            onClick={() =>setTaskOnDrawer(item)}
            
          >
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
