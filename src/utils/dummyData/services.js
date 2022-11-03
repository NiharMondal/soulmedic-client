import {
   FaMedkit,
   FaUserMd,
   FaAmbulance,
   FaLocationArrow,
   FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";

export const ourServices = [
   {
      title: "ADVANCED TECHNOLOGY",
      subtitle:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo",
      icon: <FaMedkit />,
   },
   {
      title: "HEALTHCARE SOLUTIONS",
      subtitle:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo",
      icon: <FaUserMd />,
   },
   {
      title: "24/7 AVAILABILITY",
      subtitle:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo",
      icon: <FaAmbulance />,
   },
];

export const topTrends = [
   "Breast Cancer Types",
   "Medicare Eligibility",
   "Medicaid Eligibility",
   "Yellow Fever",
   "Gonorrhea",
   "Flu Vaccine",
   "Gluten-Free Diet",
   "HIV/AIDS",
];
export const topTrendsTwo = [
   "Asthma in Cold Weather",
   "Insurance Deadlines",
   "Pumpkin Health Benefits",
   "Dietasical Syndrome",
];

export const healthData = [
   "Alzheimer's Disease",
   "Diabetes Help Center",
   "Learn About Triglycerides",
   "Vaccine Questions?",
   "ED Tablet",
   "Rheumatoid Arthritis?",
];

export const contactInfo = [
   {
      icon: <FaLocationArrow />,
      contact: "No: 58 A, East Madison St Baltimore, MD, USA",
   },
   { icon: <FaPhone />, contact: "Phone : +1 200 258 2145" },
   { icon: <MdOutlineEmail />, contact: "Email: yourname@somemail.com" },
   {
      icon: <FcGlobe />,
      contact: "Web: google.com",
   },
];
