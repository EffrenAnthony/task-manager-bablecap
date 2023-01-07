import React, { useState } from 'react';
import s from './CreateTask.module.scss';
const CreateTaskForm = ({item, saveItem, closeModal}:
  {item:any, saveItem:any, closeModal:()=> void}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [portraiImage, setPortraitImage] = useState<string>('');
  const [images, setImages] = useState<string>('');

  const handleImagesInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImages(e.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveItem([...item, {
      id: item.length > 0 ? item[item.length - 1].id + 1 : 0,
      title,
      description,
      portraiImage,
      images,
    }])
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
          value={portraiImage}
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
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
