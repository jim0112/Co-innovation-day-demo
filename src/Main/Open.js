import { useState } from 'react';
import Edit from "./components/Edit";
import List from "./components/List";
import Foot from "./components/Foot";
import "./components/styles.css";
const Open = () => {
    const [data, setData] = useState([]);
    const [mode, setMode] = useState("all");
    console.log('in Open');
    return (
        <div id="root" className="todo-app__root">
            <header className="todo-app__header">
                <div className='todo-app__title'>todos</div>
            </header>
            <section className="todo-app__main">
                <Edit add={setData} />
                <List listData={data} deleteData={setData} mode={mode} />
            </section>
            <Foot listData={data} deleteData={setData} changeMode={setMode} />
        </div>
      );
}

export default Open;