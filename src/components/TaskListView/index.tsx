import React from 'react';
import { TaskCard } from '..';
import stile from './TaskList.module.scss'
type TaskListViewProps = {
  taskList: TSTask[];
};

function TaskListView({ taskList }: TaskListViewProps) {
  return (
    <div className={stile.taskListContainer}>
      {taskList.length > 0 ? (
        <>
          {taskList.map((item, key) => {
            return (
              <TaskCard
                key={key}
                // id={item.id}
                // title={item.title}
                // description={item.description}
                // portraitImage={item.portraitImage}
                // images={item.images}
                // state={item.state}
                {...item}
              />
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TaskListView;
