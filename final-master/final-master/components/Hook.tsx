"use client";

import { FC, useEffect, useState } from "react";

interface Props {
  initHook: number;
}

interface Product {
  productName: string;
  price: number;
  // Define other fields as per the API response structure
}

const Hook: FC<Props> = ({ initHook }) => {
  const [count, setCount] = useState<number>(initHook); // Set initial count to initHook
  const [data, setData] = useState<Product[] | null>(null); // Define type for the fetched data

  useEffect(() => {
    const url = "http://dataapi.moc.go.th/products?keyword=มะพร้าว";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data); // Assuming 'data' is an array of products
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs once on mount

  const inc = (num: number) => num + 1;
  const dec = (num: number): number => num - 1;

  return (
    <>
      <p>Hook Component</p>
      <div>Count: {count}</div>
      <button onClick={() => setCount(inc(count))}>Increase</button>
      <button onClick={() => setCount(dec(count))}>Decrease</button>

      <div>
        <h2>Data:</h2>
        {data ? (
          <ul>
            {data.map((product, index) => (
              <li key={index}>
                {product.productName} - {product.price} THB
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

Hook.defaultProps = {
  initHook: 0,
};

export default Hook;
