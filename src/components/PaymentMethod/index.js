import React from "react";
import { IcBank, IcCar, IcCard } from "../../assets/Icon";

function PaymentMethod() {
  return (
    <div class="bg-white px-10 py-5 rounded-xl">
      <div class="flex flex-row items-center space-x-4">
        <label class="radio mb-8">
          <input type="radio" name="payment" />
          <span class="item"></span>
        </label>
        <div class=" flex flex-row items-center border-b-2 pb-3 mb-3 flex-1">
          <div class="bg-red-500 w-10 h-10 flex justify-center items-center rounded-lg ">
            <img src={IcCard} alt="icon Card" />
          </div>
          <p class="ml-4 text-lg">Card</p>
        </div>
      </div>
      <div class="flex flex-row items-center space-x-4">
        <label class="radio mb-8">
          <input type="radio" name="payment" />
          <span class="item"></span>
        </label>
        <div class="flex flex-row items-center border-b-2 pb-3 mb-3 flex-1">
          <div class="bg-yellow-800 w-10 h-10 flex justify-center items-center rounded-lg">
            <img src={IcBank} alt="icon Bank" />
          </div>
          <p class="ml-4 text-lg">Bank account</p>
        </div>
      </div>
      <div class="flex flex-row items-center space-x-4">
        <label class="radio mb-5">
          <input type="radio" name="payment" />
          <span class="item"></span>
        </label>
        <div class="flex flex-row items-center mb-3 flex-1">
          <div class=" bg-yellow-500 w-10 h-10 flex justify-center items-center rounded-lg">
            <img src={IcCar} alt="icon Car" />
          </div>
          <p class="ml-4 text-lg">Cash on delivery</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
