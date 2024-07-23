import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../../Components/Questions/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  // console.log("Raj2",{name}, {questions}, {score}, {setScore}, {setQuestions} );
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    // console.log("Raj1");
    if (questions && questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
    }
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions && questions.length > 0 ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues]?.category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress style={{ margin: 100 }} color="inherit" size={150} thickness={1} />
      )}
    </div>
  );
};

export default Quiz;
