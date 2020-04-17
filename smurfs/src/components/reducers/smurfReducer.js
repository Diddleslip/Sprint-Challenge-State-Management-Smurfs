import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAIL,
    getCharacters
} from "../../actions";

const initialState = {
    characters: [],
    isFetching: false,
    addingCharacter: false,
    error: ""

}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                    isFetching: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                    isFetching: false,
                    characters: [...state.characters, action.payload],
                    error: ""                    
            }
        case FETCH_CHARACTERS_FAIL:
            return {
                ...state,
                    isFetching: false,
                    error: action.payload
            }
        default: 
            return state;
    }
}

export default smurfReducer;