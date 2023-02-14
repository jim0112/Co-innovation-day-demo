import { useState } from 'react';
import Edit from "./components/Edit";
import List from "./components/List";
import Foot from "./components/Foot";
import "./components/styles.css";
import { NextFunction, Request, Response } from 'express';
import { pki, md, asn1 } from 'node-forge';
const Open = () => {
    const [data, setData] = useState([]);
    const [mode, setMode] = useState("all");
    console.log('in Open');
    const header = Request.get('X-ARR-ClientCert');
    if (!header) throw new Error('UNAUTHORIZED');
    console.log(header)
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