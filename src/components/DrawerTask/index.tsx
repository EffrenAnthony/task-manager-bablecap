import React from 'react';
import { useTaskContext } from '../../context/taskContext';

const DrawerTask = ({
  title,
  description
}: TSTask) => {

  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default DrawerTask;