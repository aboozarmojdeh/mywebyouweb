import React, { Fragment, useState, useEffect } from "react";

const QuestionInput = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Red");
  //   const [todo_date, setDate] = useState("");

  const onAnswerChange = (event) => {
    // console.log(event.target.value);
    setAnswer(event.target.value);
  };

  

  useEffect(() => {
    let labelQuestion = document.getElementById("questionId");
  let text = labelQuestion.innerText || labelQuestion.textContent;
  // console.log('console',text)
  setQuestion(text);
  });
  
  const onSubmitForm = async (e) => {
    e.preventDefault();
   
    try {
        const body={question, answer};
        const response=await fetch('http://localhost:5000/questions/',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        });
        // console.log(response);
        // window.location='/';
    } catch (err) {
        console.error(err.message)
    }

    // console.log(question)
  };
  return (
    <div className="container">
      <h2>Form control: select</h2>
      <p>The form below contains two dropdown menus (select lists):</p>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <label for="sel1" id="questionId">
          What is your favourite color?
        </label>
        <select
          className="form-control"
          id="sel1"
          value={answer}
          onChange={onAnswerChange}
        >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Pink">Pink</option>
        </select>
        <button className="btn btn-success">Submit</button>

        <br />
      </form>
    </div>
  );
};

export default QuestionInput;
