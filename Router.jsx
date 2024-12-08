import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./src/Pages/Landing";
import Auth from "./src/Pages/Auth/Auth";
import Payment from "./src/Pages/Payment/Payment";
import Orders from "./src/Pages/Orders/Orders";
import Cart from "./src/Pages/Cart/Cart";
import Results from "./src/Pages/Results/Results";
import ProductDetail from "./src/Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./src/Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51QTEuKJMxRiMO8VXeiNMLAqvDfAl1fe5pMEt0BRbeDruLqzUHEC7f2PiQu1tfwp0ekWsjFsy9Buva7nvhmt9iIw100tbEGkdFV"
);
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute msg={"sign in first to pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You have to sign in to acess order"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productID" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
