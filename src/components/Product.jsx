const Product = ({ product, setBasket, basket, total, setTotal, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((filtre) => filtre.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };
  // setTotal(
  //   basket.reduce((acc, item) => {
  //     return (
  //       acc +
  //       item.amount * products.find((product) => product.id === item.id).price
  //     );
  //   }, 0)
  // );

  return (
    <div className="products">
      <h5>{product.title}</h5>
      <div className="price">${product.price}</div>
      <div className="actions">
        <button disabled={!basketItem} onClick={removeBasket}>
          Sat
        </button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button disabled={money < total + product.price} onClick={addBasket}>
          Satın al
        </button>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
