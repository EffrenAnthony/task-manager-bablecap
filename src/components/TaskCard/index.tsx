import { AiFillCheckCircle } from "react-icons/ai";
import s from './TaskCard.module.scss'
function TaskCard({ portraitImage, title}: TSTask) {
  return (
    <div className={s.taskCardContainer}>
      <div className={s.taskImageContainer}>
        <img src={portraitImage} className={s.taskImage}/>
      </div>
      <div className={s.taskTitleContainer}>
        <p>{title}</p>
        <AiFillCheckCircle />
      </div>      
    </div>
  );
}

export default TaskCard;
