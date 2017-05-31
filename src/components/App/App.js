import React from 'react';
import './App.css';
// import Users from '../../containers/Users'

export const App = ({ quizzes }) => {
  //
  // const mapOverAnswers = (answersArray) => {
  //   answersArray.map((answer, index) => {
  //     return (
  //       <input key={index} type='radio' score={answer.score}>{answer.title}</input>
  //     )
  //   })
  // }
  //
  // const mapOverQuestions = (questionsArray) => {
  //   questionsArray.map(question => {
  //     return (
  //       <div  key={question.id}
  //             className='question'>
  //         <p className='question-title'>{question.title}</p>
  //         <div className='question-answers'>
  //           {mapOverAnswers(`${question.answers}`)}
  //         </div>
  //       </div>
  //     )
  //   })
  // }
  //
  // const showQuizInfo = () => {
  //   return (
  //     <article className='quiz'>
  //       <h2 className='quiz-title'>{quizzes[0].quizzes[0].title}</h2>
  //       {mapOverQuestions(quizzes[0].quizzes[0].questions)}
  //     </article>
  //   )
  // }
  //
  const showLoadingInfo = () => {
    return (
      <img className='waiting-gif' src='/waiting.gif' alt='loading animation' />
    )
  }

  const displayStoreInfo = () => {
    if (!quizzes.length) {
      return showLoadingInfo();
    } else {
      return (
        <form className='quiz'>
          <h2 className='quiz-title'>{quizzes[0].quizzes[0].title}</h2>
          {
            quizzes[0].quizzes[0].questions.map(question => {
              return (
                <div  key={question.id}
                      className='question'>
                  <p className='question-title'>{question.title}</p>
                  <div className='question-answers'>
                    {question.answers.map((answer, index) => {
                      return (
                        <div className={index.toString() + 'score' + answer.score.toString()}>
                          <input  key={index}
                                  className='radio'
                                  type='radio' />
                          {answer.title}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }
          <button className='submit' type='submit'>Submit Answers</button>
        </form>
      )
    }
  }

  return (
    <div className="App">
      <h1>Welcome To Quizzer</h1>
      {displayStoreInfo()}
    </div>
  )
}
