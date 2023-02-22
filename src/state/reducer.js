//Can Setup an interface one for namerealm and such
//, others being the returned data from api call

//appStore.getState().name to get the name
//appStore.dispatch({type: 'ADD_NAME', name:'Slimwind'});
//appStore.dispatch({type: 'ADD_REALM', realm:'Sargeras'});
const initialState = {
  name: "b",
  realm: ""
}


export default function appReducer(state = initialState, action){
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'ADD_NAME':{
      return{
        ...state,
        name: action.name
      }
    }
    case 'ADD_REALM':{
      return{
        ...state,
        realm: action.realm
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}