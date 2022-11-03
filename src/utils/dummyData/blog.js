import { AiFillVideoCamera, AiFillSound, AiFillMessage } from "react-icons/ai";
import {MdMessage} from 'react-icons/md'
import doctorAndPatient from '../../assets/blog/patient_and_doctor.jpg'
import waitingRoom from '../../assets/blog/waiting room.jpg'
import femaleDoctor from '../../assets/blog/waiting room.jpg'


export const BLOG_DATA = [
   {
      icon: <AiFillVideoCamera />,
      photo: doctorAndPatient,
      title: "Proin fermentum ut massa at",
      subtitle:
         "Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum...",
   },
   {
      icon: <MdMessage />,
      photo: waitingRoom,
      title: "Curabitur lobortis risus at",
      subtitle:
         "tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum non est...",
   },
   {
      icon: <AiFillSound />,
      photo: femaleDoctor,
      title: "Heart Rate Predicts risk",
      subtitle:
         "Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum...",
   },
];