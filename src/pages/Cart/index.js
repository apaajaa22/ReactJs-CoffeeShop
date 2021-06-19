import React, { Component } from "react";
import { connect } from "react-redux";
import { ILFood4 } from "../../assets";
import {
  Button,
  Footer,
  Header,
  ItemCart,
  PaymentMethod,
} from "../../components";
class Cart extends Component {
  render() {
    const { products } = this.props.carts;
    return (
      <section>
        <header className="px-32">
          <Header
            type="secondary"
            home="text-gray-500"
            product="text-gray-500"
            cart="text-yellow-900 font-bold"
            history="text-gray-500"
          />
        </header>
        <main className="bg-bg-cart w-full h-full px-32 bg-cover bg-center">
          <h3 className="text-white font-bold w-56 text-2xl shadow-2xl py-10">
            Checkout your item now!
          </h3>
          <div className="flex flex-row">
            <section className="w-threepersen bg-white h-full rounded-xl py-16 ">
              <h4 className="text-yellow-800 text-2xl font-bold text-center">
                Order Summary
              </h4>
              <div className="border-b-2 border-gray-300 mx-10 pb-2">
                {products.map((product) => {
                  return (
                    <ItemCart
                      key={product.id}
                      pic={product.picture}
                      name={product.name}
                      quantity={product.quantity}
                      size="Regular"
                      price={product.base_price}
                    />
                  );
                })}
              </div>
              <div className="flex flex-row items-center justify-between mt-5 mx-10">
                <div className="leading-relaxed flex-1">
                  <p>SUBTOTAL</p>
                  <p>TAX & FEES</p>
                  <p>SHIPPING</p>
                </div>
                <div className="leading-relaxed ">
                  <p>IDR 120.000</p>
                  <p>IDR 20.0000</p>
                  <p>IDR 10.000</p>
                </div>
              </div>
              <div className="flex flex-row justify-between mx-10 text-yellow-900 font-bold text-2xl pt-5">
                <p>TOTAL</p>
                <p>IDR 150.000</p>
              </div>
            </section>
            <section className="flex-1 w-fourpersen h-screen ml-20 px-28 pr-52 -mt-12">
              <div className="text-white font-bold flex flex-row justify-between mb-5">
                <p className="text-xl">Address details</p>
                <button className="focus:outline-none">edit</button>
              </div>
              <div className="bg-white w-full p-10 space-y-3 rounded-2xl">
                <p className="border-b-2 border-gray-300 py-1">
                  <span className="font-bold">Delivery</span>{" "}
                  <span className="font-medium">to Iskandar Street</span>
                </p>
                <div className="border-b-2 border-gray-300 ">
                  <p className="py-1 w-96">
                    Km 5 refinery road oppsite re public road, effurun, Jakarta
                  </p>
                </div>
                <p>+62 81348287878</p>
              </div>
              <p className="text-white pt-5 pb-2 font-bold text-xl">
                Payment Method
              </p>
              <div className="space-y-4">
                <PaymentMethod />
                <Button type="brown" text="Confirm and Pay" />
              </div>
            </section>
          </div>
        </main>
        <footer className="px-32 py-20">
          <Footer />
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  carts: state.carts,
});
export default connect(mapStateToProps)(Cart);
