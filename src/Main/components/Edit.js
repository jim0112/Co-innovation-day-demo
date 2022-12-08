import "./styles.css";
import { useState } from "react";

function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const Edit = ({ add }) => {
    function addItem(){
        add(function (prevData) {
            return [
                ...prevData,
                {
                    index: prevData.length,
                    id: generateString(6),
                    note,
                    checked: false,
                    style: {
                        'textDecoration': 'none',
                        'opacity': 1,
                    },
                    color: {'backgroundColor': 'rgba(99, 99, 99, 0.698)'}
                },
            ];
        });
    }

    function noteChange(e){
        setNote(e.target.value);
    }

    function handleKeyDown(event){
        if (event.key === 'Enter') {
            addItem();
            setNote("");
        }
    }

    const [note, setNote] = useState("");
    return (
        <input type="text" className="todo-app__input" 
        placeholder="What needs to be done?" 
        value={note} onChange={noteChange} onKeyDown={handleKeyDown}/>
    )
}
export default Edit;