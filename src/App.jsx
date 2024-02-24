import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import products from "./products.json";
import Product from "./components/Product";

function App() {
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;

    basket.forEach((basketItem) => {
      if (basketItem.amount !== undefined) {
        const product = products.find((item) => item.id === basketItem.id);

        if (product && product.price !== undefined) {
          newTotal += basketItem.amount * product.price;
        }
      }
    });

    setTotal(newTotal);
    console.log(newTotal);
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          money={money}
          setMoney={setMoney}
          setBasket={setBasket}
          product={product}
          total={total}
          setTotal={setTotal}
        />
      ))}
    </>
  );
}

export default App;
