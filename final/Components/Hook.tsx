"use client";

import { FC, useState, useEffect } from "react";

interface Props {
  initHook: number;
}

const Hook: FC<Props> = ({ initHook }) => {
  const [count, setCount] = useState<number>(initHook);
  const [data, setData] = useState({});

  const inc = (num: number): number => {
    return num + 1;
  };

  const dec = (num: number) => {
    return num - 1;
  };

  const getData = async (url: string) => {
    const res = await fetch(url);
    const dataRes = await res.json();

    console.log(dataRes);
    setData(dataRes);
  };

  useEffect(() => {
    const url = "https://dataapi.moc.go.th/products?keyword=มะพร้าว";

    // setCount(initHook);
    try {        
      getData(url);
    } catch (err) {
      console.log("Can't fetch :", err);
    }
  }, []);

  return (
    <>
      <p>Hook</p>
      <div>{count}</div>
      <button onClick={() => setCount(inc(count))}>Increase</button>
      <button onClick={() => setCount(dec(count))}>Decrease</button>
    </>
  );
};

Hook.defaultProps = {
  initHook: 0,
};

export default Hook;
