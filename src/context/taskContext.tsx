import React, { useContext } from 'react';

type UpdateDrawerFnParameters = {
  children: React.ReactElement;
};

export type TaskContextType = {
  data: string;
  isOpenDrawer: boolean;
  toggleDrawer: () => void;
  updateCurrentTask: (task: TSTask) => void;
  currentTask: TSTask;
  drawerChildren: React.ReactElement;
  updateDrawerChildren: ({ children }:UpdateDrawerFnParameters) => void;
};

export const TaskContext = React.createContext<TaskContextType>(
  undefined as unknown as TaskContextType
);

const TaskProvider = ({ children }: any) => {
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [currentTask, setCurrentTask] = React.useState<TSTask>(
    undefined as unknown as TSTask
  );
  const [drawerChildren, setDrawerChildren] =
    React.useState<React.ReactElement>(<></>);
  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };
  const updateCurrentTask = (task: TSTask) => {
    setCurrentTask(task);
  };
  const updateDrawerChildren = ({
    children,
  }: UpdateDrawerFnParameters) => {
    setDrawerChildren(children);
  };

  const value = {
    data: 'data',
    isOpenDrawer,
    toggleDrawer,
    currentTask,
    updateCurrentTask,
    drawerChildren,
    updateDrawerChildren,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;

export function useTaskContext(): TaskContextType {
  return useContext(TaskContext);
}
