import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL";

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START })
    axios.get("http://localhost:3333/smurfs")
.then(response => {
    console.log("RESPONSE!!!!", response.data)
    dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data })
})
.catch(error => {
    console.log("Got error: ", error)
    dispatch({ type: FETCH_CHARACTERS_FAIL, payload: error})
})
}