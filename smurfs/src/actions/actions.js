import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL";
export const ADD_CHARACTER_SUCCESS = "ADD_CHARACTER_SUCCESS";
export const ADD_CHARACTER_FAIL = "ADD_CHARACTER_FAIL";

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START })
    axios.get("http://localhost:3333/smurfs")
.then(response => {
    console.log("RESPONSE!!!!", response.data)
    dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data })
})
.catch(error => {
    console.log("Error from GET action: ", error)
    dispatch({ type: FETCH_CHARACTERS_FAIL, payload: error})
})
}

export const addCharacters = (newSmurf) => dispatch => {
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
        console.log("POST ACTION INFO", response);
        dispatch({ type: ADD_CHARACTER_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log("Error from POST action: ", error)
        dispatch({ type: ADD_CHARACTER_FAIL, payload: error})
    })
}