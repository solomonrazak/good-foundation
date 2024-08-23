import React from 'react';
import { useParams } from 'react-router-dom';
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import award1 from "../../assets/images/award1.jpg";
import { v4 as uuidv4 } from 'uuid';


export const achievementUUIDs = {
    award1: uuidv4(),
    award2: uuidv4(),
  };
const achievementDetails = {
    [achievementUUIDs.award1]: {
      title: 'Good Foundation wins the Presidential Award',
      date: 'January 20, 2024',
      description1: `On January 20, 2024, Good Foundation made history as one of its brightest students, Abena Nyarko, was awarded the Presidential Award for Best Student across all regions. This remarkable achievement is a testament to Abena's dedication, intelligence, and unwavering commitment to excellence.`,
      description2:`Abena, a diligent and compassionate student, has consistently demonstrated outstanding academic performance, excelling in all subjects, particularly in mathematics and science. Her thirst for knowledge and passion for learning set her apart from her peers, earning her top honors in numerous national competitions.`,
      description3: `Beyond academics, Abena is also known for her leadership qualities and active participation in various extracurricular activities. She leads the school's debate team, where her eloquence and critical thinking skills shine through. Additionally, Abena is a devoted member of the community service club, often organizing and participating in initiatives aimed at improving the lives of those around her.`,
      description4: `Receiving the Presidential Award is a crowning achievement for Abena, who dreams of pursuing a career in engineering. This accolade not only recognizes her hard work and talent but also serves as an inspiration to her fellow students, showing them that with perseverance and determination, anything is possible.`,
      description5: `Good Foundation is incredibly proud of Abena Nyarko and celebrates her success as a shining example of what can be achieved through dedication and a strong commitment to academic and personal growth.`,
      image: award1,
    },
    [achievementUUIDs.award2]: {
      title: 'Another Achievement',
      date: 'February 14, 2024',
      description: 'Good Foundation achieved something remarkable...',
      image: 'award2.jpg',
    },
    // Add more achievements here
  };

const AchievementDetail = () => {

    const { id } = useParams();

    const achievement = achievementDetails[id];

  return (
    <div className="">
        {achievement ?  
        <>
        <div
        className="w-full h-[23rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${sampleHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>ABOUT</p>
          <p>Achievements</p>
        </div>
      </div>
      <div className="p-8 my-10">
        <p className="text-2xl md:text-4xl font-medium text-slate-600 mb-6">{achievement.title}</p>
        <p className="flex text-gray-600 gap-2 items-center"><FaRegCalendarDays /> {achievement.date}</p>
        <div className="flex flex-col md:flex-row mt-10 gap-10">
            <div className="w-full md:w-[65%] flex flex-col md:flex-row">
                <p className="flex flex-col gap-5 text-slate-700 leading-7">
                <span>{achievement.description1}</span>
                <span>{achievement.description2}</span>
                <span>{achievement.description3}</span>
                <span>{achievement.description4}</span>
                <span>{achievement.description5}</span>
                </p>
            </div>
            <img src={achievement.image} alt={achievement.title} className="w-full md:w-[35%] h-72"/>
        </div>
      </div>
      </>
      : 
      <p>Achievement not found.</p>
    }

    </div>
  )
}

export default AchievementDetail;