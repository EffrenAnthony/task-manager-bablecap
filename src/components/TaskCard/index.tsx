import React from 'react';

function TaskCard({ title, description }: TSTask) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;
