import { AiFillCheckCircle } from "react-icons/ai";
import s from './TaskCard.module.scss'
function TaskCard({ portraitImage, title}: TSTask) {
  return (
    <div>
      <div className={s.taskImageContainer}>
        <img src={portraitImage} className={s.taskImage}/>
      </div>
      <p>{title}</p>
      <AiFillCheckCircle />
    </div>
  );
}

export default TaskCard;
