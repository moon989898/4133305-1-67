"use client";

import { url } from "inspector";
import { init } from "next/dist/compiled/webpack/webpack";
import { FC, useEffect, useState } from "react";

interface Props{
    initHook:number;
}

const Hook:FC <Props>= ({initHook}) => {
    const [count,setCount] = useState<number>(0);
    const [data,setData] = useState();

   
    useEffect(()=>{
        setCount(initHook);

        const url ="http://dataapi.moc.go.th/products?keyword=มะพร้าว"
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            setData(data);
                console.log(data);
            
        });
    },[count]);

    const inc = (num:number)=>{
        return num + 1;
    };
    const dec = (num:number):number=>{
        return num - 1;
    };

    return(
        <>
        <p>Hook</p>
        <div>{count}</div>
        <button onClick={()=>setCount(inc(count))}>Increase</button>
        <button onClick={()=>setCount(dec(count))}>Decrease</button>
        </>
    );
};

Hook.defaultProps={
    initHook: 0,
};

export default Hook;