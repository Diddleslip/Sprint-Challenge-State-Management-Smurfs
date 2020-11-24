import React, { useState } from 'react';
import { connect } from "react-redux";
import { getCharacters, addCharacters } from "../actions";

function Form(props) {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    });

    const handleChanges = e => {
        // e.preventDefault();

        setNewSmurf({ ...newSmurf, 
        [e.target.name]: e.target.value,
        // [e.target.age]: e.target.value,
        // [e.target.height]: e.target.value,    
        })
        // console.log(newSmurf);
    }

    const onSubmit = e => {
        e.preventDefault();

        props.getCharacters();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* <label>
                    <button onClick={props.getCharacters}>Get API</button>
                </label><br/><br/><br/> */}

                <label>
                    <input
                        name="name"
                        type="text"
                        value={newSmurf.name}
                        placeholder="Type in a smurf name..."
                        onChange={handleChanges}
                    /><br/>
                </label>
                <label>
                    <input
                        name="age"
                        type="text"
                        value={newSmurf.age}
                        placeholder="Type in a smurf age..."
                        onChange={handleChanges}
                    />
                </label><br/>
                <label>
                    <input
                        name="height"
                        type="text"
                        value={newSmurf.height}
                        placeholder="Type in a smurf height..."
                        onChange={handleChanges}
                    />
                </label><br/>
                <label>
                    <button type="submit" onClick={() => props.addCharacters(newSmurf)}>Add smurf!</button>
                </label>
            </form>

            {props.characters.map((item) => {
                console.log("CONSOLE FROM ONLY MAP", item);
                return(
                    <div className="cardDiv">
                        <h1>Name: {item.name}</h1>
                        <h2>Age: {item.age}</h2>
                        <h2>Height: {item.height}</h2>
                    </div>
                )
            })}

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

export default connect(mapStateToProps, {getCharacters, addCharacters})(Form);
