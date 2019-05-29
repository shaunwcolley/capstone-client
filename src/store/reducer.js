const initialState = {
  az: false,
  za: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AtoZ':
    return {
      ...state,
      az: !state.az,
      za: false
    }
    case "ZtoA":
    return {
      ...state,
      az: false,
      za: !state.za
    }
  }
  return state
}

export default reducer
