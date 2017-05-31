const quizReducers = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVE_QUIZZES':
      console.log('Getting quizzes!')
      return [...state, action.quizzes]

    default:
      return state;
  }
}

export default quizReducers
