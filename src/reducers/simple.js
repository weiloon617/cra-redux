const initialState = {
  backgroundColor: '#282c34',
}

const colorList = ['#282c34', 'black']

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, backgroundColor: colorList[action.payload % 2] }
    default:
      return state
  }
}
