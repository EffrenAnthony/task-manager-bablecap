import React, { useEffect, useState } from 'react';
import s from './CreateTask.module.scss';
import { useTaskContext } from '../../context/taskContext';
const CreateTaskForm = ({item, saveItem, closeModal}:
  {item:any, saveItem:any, closeModal:()=> void}) => {

  const { currentTask } = useTaskContext()

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [portraitImage, setPortraitImage] = useState<string>('');
  const [images, setImages] = useState<string>('');
  

  useEffect(()=> {
    if(currentTask){
      setTitle(currentTask.title)
      setDescription(currentTask.description)
      setPortraitImage(currentTask.portraitImage)
      if(typeof(currentTask.images) === "object"){
        setImages(currentTask.images.join())
      } else {
        setImages(currentTask.images)
      }
    }
  },[currentTask])


  const handleImagesInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImages(e.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!currentTask){
      // Agreagar task
      saveItem([...item, {
        id: item.length > 0 ? item[item.length - 1].id + 1 : 0,
        title,
        description,
        portraitImage,
        images,
      }])
    } else {
      // Editar task
      const indexTask = item.indexOf(currentTask)
      const copyList = [...item]
      copyList[indexTask] = {
        id: currentTask.id,
        title,
        description,
        portraitImage,
        images,
      }
      saveItem([...copyList])
    }
    closeModal()
  };
  return (
    <div className={s.formContainer}>
      <form className={s.taskForm} onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
            // console.log(e.target.value)
            // console.log(title)
          }}
          placeholder="Title"
        />
        <input
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Description"
        />
        <input
          value={portraitImage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPortraitImage(e.target.value);
          }}
          type="text"
          placeholder="Portrait Image"
        />
        <textarea
          value={images}
          onChange={handleImagesInput}
          rows={10}
          placeholder="Images"
        />
        <button type="submit">{
        currentTask ?'Editar Tarea' :'Crear Tarea'
        }</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
