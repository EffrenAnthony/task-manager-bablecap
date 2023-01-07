import React from 'react';
import { TaskCard } from '..';

type TaskListViewProps = {
  taskList: TSTask[];
};

function TaskListView({ taskList }: TaskListViewProps) {
  return (
    <div>
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
