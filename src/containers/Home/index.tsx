import React, { useEffect, useState } from 'react';
import defaultTasks from '../../mocks/tasks';
import { TaskListView, ModalComponent, CreateTaskForm } from '../../components';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useTaskContext } from '../../context/taskContext';

// function Fantasma() {
//   useEffect(() => {
//     console.log('apareci');
//     return () => {
//       console.log('me fui');
//     };
//   }, []);
//   return <div>Soy el fantasma</div>;
// }

function HomeComponent() {
  // const [pokemon, setPokemon] = useState<any>('');
  // const [pokeId, setPokeId] = useState<any>(1);
  // const [mostrar, setMostrar] = useState<any>(false);
  // const [taskList, setTaskList] = useState<TSTask[]>([]);

  // ! YA QUE USAMOS UN USE EFFECT EN USELOCALSTORAGE,
  // ! ESTE TIENE QUE ESTAR A LA ALTURA DEL COMPONENTE
  // ! QUE RENDERIZA LOS TASK, SINO NO VA A ACTUALIZARLOS
  // ! PORQUE EL RENDER SERA SOLO DEL COMPONENTE DONDE SE USÓ EL HOOK
  const { item, saveItem, loading, error } = useLocalStorage('taskList', []);
  const { openModal, handleOpenModal } = useTaskContext();
  // const [number, setNumber] = useState<number>(0);
  // const [show, setShow] = useState<boolean>(false);
  // console.log('render');
  // let number = 0;
  // fetch
  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   setTaskList(defaultTasks);
  //   //   console.log('render')
  //   // }, Math.floor(Math.random() * 5000) + 1000);
  //   async function getPokemon() {
  //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  //     const data = await res.json();
  //     setPokemon(data);
  //   }
  //   getPokemon();
  // }, [
  //   // taskList
  //   // !!! pokemon
  //   pokeId,
  // ]);

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button type="button" onClick={handleOpenModal}>
          Nueva Tarea
        </button>
      </div>
      {/* <div>
        <button
          type="button"
          onClick={() => {
            setPokeId(pokeId + 1);
          }}
        >
          Otro Pokemon
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          {mostrar ? 'desaparecer' : 'aparecer'}
        </button>
      </div>
      {pokemon.name}
      {mostrar && <Fantasma />} */}
      <TaskListView
        taskList={item! as TSTask[]}
        loading={loading}
        error={error}
        saveItem={saveItem}
      />
      <div />
      <ModalComponent
        modalIsOpen={openModal}
        closeModal={handleOpenModal}
        title="New Task"
      >
        <CreateTaskForm
          saveItem={saveItem}
          item={item}
          closeModal={handleOpenModal}
        />
      </ModalComponent>
    </div>
  );
}

export default HomeComponent;

/*
        <button
          type="button"
          onClick={() => {
            // setNumber(number + 1);
            // console.log(number);
            // number += 1;
            // setShow(!show);
          }}
        >
          +
        </button>
        {show && (
          <>
            {number}
            ITem
          </>
        )}

        */
