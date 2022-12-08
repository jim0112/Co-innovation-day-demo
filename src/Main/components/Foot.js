const Foot = ({ listData, deleteData, changeMode }) => {
    console.log('in Foot');
    function all(){
        changeMode('all');
    }
    function active(){
        changeMode('active');
    }
    function complete(){
        changeMode('complete');
    }
    function clear_complete(){
        deleteData(function(prev) {
            return prev.filter((item) => item.checked === false);
        });
    }
    let cnt = ([...listData].filter(item => item.checked === true)).length;
    console.log(cnt);
    var style = {'visibility': 'hidden'};
    if(cnt > 0)
        style = {'visibility': 'visible'};
    if(listData.length > 0)
        return (
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">{listData.length - cnt} left</div>
                <ul className="todo-app__view-buttons">
                    <button onClick={all}>All</button>
                    <button onClick={active}>Active</button>
                    <button onClick={complete}>Completed</button>
                </ul>
                <div className="todo-app__clean" style={style}>
                    <button onClick={clear_complete}>Clear completed</button>
                </div>
            </footer>
        );
}

export default Foot;