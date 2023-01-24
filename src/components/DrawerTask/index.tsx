import { ToggleDrawerAction, useTaskContext } from "../../context/taskContext";
import useLocalStorage from "../../hooks/useLocalStorage";

type ExtraProps = {
  saveItem: (newItem: any) => void;
};

type DrawerTaskProps = TSTask & ExtraProps;

const DrawerTask = ({ title, description, saveItem, id }: DrawerTaskProps) => {
  const {toggleDrawer, taskList, handleOpenModal, updateCurrentTask} = useTaskContext()
  const deleteCAC = () => {
    const newTaskList:TSTask[] = taskList.filter((task:TSTask) => task.id !== id)
    saveItem(newTaskList)
    toggleDrawer(ToggleDrawerAction.DEFAULT)
    updateCurrentTask(undefined as unknown as TSTask)
  }

  const openUpdateModal = () => {
    handleOpenModal()
    toggleDrawer(ToggleDrawerAction.UPDATE_TASK)
  }
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      <button 
      onClick={deleteCAC}
      style={{ backgroundColor: 'red' }}>Delete</button>
      <button 
      onClick={openUpdateModal}
      style={{ backgroundColor: 'green' }}>Update Task</button>
    </div>
  );
};

export default DrawerTask;
