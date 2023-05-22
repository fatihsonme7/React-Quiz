import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import Modal from "../../components/modal/Modal";
import QuestionCard from "../../components/questionCard/QuestionCard";
import "./Quiz.css";

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(questionsData, "questionsData");

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Quiz;
