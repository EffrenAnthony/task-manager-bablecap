import React, { useContext } from 'react';

export enum ToggleDrawerAction {
  DEFAULT = 'toggle',
  UPDATE_TASK = 'updateTask',
}

type UpdateDrawerFnParameters = {
  children: React.ReactElement;
};

export type TaskContextType = {
  data: string;
  isOpenDrawer: boolean;
  toggleDrawer: (action: ToggleDrawerAction) => void;
  updateCurrentTask: (task: TSTask) => void;
  currentTask: TSTask;
  drawerChildren: React.ReactElement;
  updateDrawerChildren: ({ children }: UpdateDrawerFnParameters) => void;
  setTaskListOnContext: (taskList: TSTask[]) => void;
  taskList: TSTask[];
  openModal: boolean;
  handleOpenModal: () => void;
};

export const TaskContext = React.createContext<TaskContextType>(
  undefined as unknown as TaskContextType
);

const TaskProvider = ({ children }: any) => {
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [taskList, setTaskList] = React.useState<TSTask[]>([]);
  const [currentTask, setCurrentTask] = React.useState<TSTask>(
    undefined as unknown as TSTask
  );
  const [drawerChildren, setDrawerChildren] =
    React.useState<React.ReactElement>(<></>);

  const updateCurrentTask = (task: TSTask) => {
    setCurrentTask(task);
  };
  const toggleDrawer = (action: ToggleDrawerAction) => {
    if (action === ToggleDrawerAction.DEFAULT && isOpenDrawer) {
      updateCurrentTask(undefined as unknown as TSTask);
    }
    setIsOpenDrawer(!isOpenDrawer);
  };
  const updateDrawerChildren = ({ children }: UpdateDrawerFnParameters) => {
    setDrawerChildren(children);
  };

  const setTaskListOnContext = (taskList: TSTask[]) => {
    setTaskList(taskList);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    if (openModal) {
      updateCurrentTask(undefined as unknown as TSTask);
    }
  };
  const value = {
    data: 'data',
    isOpenDrawer,
    toggleDrawer,
    currentTask,
    updateCurrentTask,
    drawerChildren,
    updateDrawerChildren,
    taskList,
    setTaskListOnContext,
    openModal,
    handleOpenModal,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;

export function useTaskContext(): TaskContextType {
  return useContext(TaskContext);
}
