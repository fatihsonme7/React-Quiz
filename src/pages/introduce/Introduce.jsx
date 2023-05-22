import React, { useState } from "react";
import "./Introduce.css";
import Dropdown from "../../components/Dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyData, setDiffucultyData] = useState("");
  const navigate = useNavigate();
  const totalQuestions = 10;

  console.log(difficultyData, "difficultyData");

  const startQuiz = () => {
    if (difficultyData) {
      navigate(`/quiz/${difficultyData}/${totalQuestions}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bkx-bV8Y7oosGWM6rxIzAZdNyqNw1QaZKw&usqp=CAU"
          alt="Logo"
        />
        <Dropdown data={difficulty} setDiffucultyData={setDiffucultyData} />
        <div onClick={startQuiz} className="introduce-btn">
          Quize Başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
