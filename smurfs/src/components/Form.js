import React from 'react';
import { connect } from "react-redux";
import { getCharacters } from "../actions";

function Form(props) {
    return (
        <div>
            <label>
                <button onClick={props.getCharacters}>Get API</button>
            </label>
            {props.characters.map(X => {
                return(
                    X.map(item => {
                        console.log("THIS IS DOUBLE X", item)
                        return (
                            <div className={"cardDiv"}key={item.id}>
                                <h1>Name: {item.name}</h1>
                                <h2>Age: {item.age}</h2>
                                <h2>Height: {item.height}</h2>
                            </div>  
                        )
                    })
                )
            })} {/* End of Map */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getCharacters})(Form);
