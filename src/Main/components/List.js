import "./styles.css";
import Item from "./Item";

const List = ({ listData, deleteData, mode }) => {
    console.log('in List');
    return (
        <ul className="todo-app__list" id="todo-list">
            {listData.map((item) => {
                const { index, id, note, checked, style, color} = item;
                return (
                    <Item 
                        mode={mode}
                        checked={checked}
                        index={index}
                        secret={id}
                        id={id}
                        note={note}
                        style={style}
                        color={color}
                        deleteData={deleteData}
                    />
                );
            })}
        </ul>
    );
};

export default List;