import style from './ComponentModel.module.scss';

function ComponentModel() {
  return (
    <div role='c-model-container'>
      ComponentModel
      <p className={style.testComponent}>Test</p>
    </div>
  );
}

export default ComponentModel;
