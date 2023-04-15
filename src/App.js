import "./App.css";
import Index from "./component/Index";
import Product from "./component/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./component/data/Data";
import CartDetail from "./component/cart/CartDetail";
import { useState } from "react";
import ContectUs from "./component/ContectUs";
import Login from "./component/Login";
import CreateUser from "./component/CreateUser";
function App() {
  const { productItem } = data;
  const [cartitem, setCartitem] = useState([]);

  const handelAddProduct = (Product) => {
    console.log("--------", Product);

    const ProductEixt = cartitem.find((Item) => Item.id === Product.id);
    if (ProductEixt) {
      setCartitem(
        cartitem.map((Item) =>
          Item.id === Product.id
            ? { ...ProductEixt, quantity: ProductEixt.quantity + 1 }
            : Item
        )
      );
    } else {
      setCartitem([...cartitem, { ...Product, quantity: 1 }]);
    }
  };

  const handleRemoveproduct = (Product) => {
    const ProductEixt = cartitem.find((Item) => Item.id === Product.id);
    if (ProductEixt.quantity === 1) {
      setCartitem(cartitem.filter((Item) => Item.id !== Product.id));
    } else {
      setCartitem(
        cartitem.map((Item) =>
          Item.id === Product.id
            ? { ...ProductEixt, quantity: ProductEixt.quantity - 1 }
            : Item
        )
      );
    }
  };

  const handelCartClear = () => {
    setCartitem([]);
  };
  const handleRemoveCart = (Product) => {
    const ProductEixt = cartitem.find((Item) => Item.id === Product.id);
    if (ProductEixt.quantity === 1) {
      setCartitem(cartitem.filter((Item) => Item.id !== Product.id));
    } else {
      setCartitem(
        cartitem.map((Item) =>
          Item.id === Product.id
            ? { ...ProductEixt, quantity: ProductEixt.quantity * 0 }
            : Item
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route
          path="/product"
          element={
            <Product
              data={productItem}
              handelAddProduct={handelAddProduct}
              setCartitem={cartitem}
              handleRemoveproduct={handleRemoveproduct}
            />
          }
        />

        <Route
          path="/detail"
          element={
            <CartDetail
              setCartitem={cartitem}
              handelAddProduct={handelAddProduct}
              handleRemoveproduct={handleRemoveproduct}
              handelCartClear={handelCartClear}
              handleRemoveCart={handleRemoveCart}
            />
          }
        />

        <Route path="/contect" element={<ContectUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usercreate" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
