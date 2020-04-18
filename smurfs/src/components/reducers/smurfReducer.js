import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAIL,
    ADD_CHARACTER_SUCCESS,
    ADD_CHARACTER_FAIL,
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
                    characters: action.payload,
                    error: ""                    
            }
        case FETCH_CHARACTERS_FAIL:
            return {
                ...state,
                    isFetching: false,
                    error: action.payload
            }
        case ADD_CHARACTER_SUCCESS:
            const newSmurf = {
                name: action.payload.name, 
                age: action.payload.age, 
                height: action.payload.height, 
                id: action.payload.id
            }
            return {
                ...state, characters: [{...state.characters, newSmurf}]
            }
        case ADD_CHARACTER_FAIL:
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