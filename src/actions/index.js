export const addUser = () => {
  return {
    type: 'ADD_USER'
  }
}

export const receiveQuizzes = (quizzes) => {
  return {
    type: 'RECEIVE_QUIZZES',
    quizzes
  }
}

export const getQuizzes = () => {
  return dispatch => {
    fetch('/quizzes')
      .then(resp => resp.json())
      .then(quizzes => {
      dispatch(receiveQuizzes(quizzes))
      })
      .catch(error => console.log('Error retreiving quizzes: ', error))
  }
}
