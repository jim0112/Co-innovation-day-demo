const Item = ({ mode, checked, index, secret, id, note, style, color, deleteData }) => {
    console.log('in Item');
    function deleteItem() {
        deleteData(function(prev) {
            return prev.filter((item) => item.id !== id);
        });
    }
    function addLine() {
        deleteData(function(prev) {
            let target = [...prev];
            if(target[index].style.textDecoration === 'none'){
                target[index].style = {'textDecoration': 'line-through', 'opacity': 0.5};
                target[index].checked = true;
                target[index].color = {'backgroundColor': '#26ca299b'};
            }
            else{
                target[index].style = {'textDecoration': 'none', 'opacity': 1};
                target[index].checked = false;
                target[index].color = {'backgroundColor': 'rgba(99, 99, 99, 0.698)'};
            }
            return target;
        });
    }
    if(mode === 'active' && checked === true)
        return "";
    if(mode === 'complete' && checked === false)
        return "";

    return (
        <li key={secret} className="todo-app__item">
            <div className="todo-app__checkbox">
                <input id={secret} type="checkbox" />
                <label htmlFor={secret} onClick={addLine} style={color}></label>
            </div>
            <h1 className="todo-app__item-detail" style={style}>{note}</h1>
            <img src={require("./x.png")} className="todo-app__item-x" onClick={deleteItem} />
        </li>
    )
}

export default Item;