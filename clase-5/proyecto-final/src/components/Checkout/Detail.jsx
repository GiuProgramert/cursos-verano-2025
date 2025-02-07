import CheckoutImg from "../../assets/img/checkout-image.png";
import Button from "../Button";
import Input from "../Input";

export default function Detail() {
  return (
    <div className="bg-[#F5F5F5] pl-10 pr-40 pt-10 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <img src={CheckoutImg} alt="checkout image" width={137} height={137} />
        <div className="flex flex-col gap-1">
          <span className="capitalize text-lg font-volkhov">
            Mini dress with ruffled straps
          </span>
          <span className="text-[#484848] text-base">Red</span>
        </div>
        <span>$100.00</span>
      </div>

      <div className="flex justify-between gap-4">
        <Input variant="secondary" placeholder="Discount code" />
        <Button>Apply</Button>
      </div>

      <div className="text-base">
        <div className="flex justify-between mb-3">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div>
        <div className="flex justify-between mb-3">
          <span>Shipping</span>
          <span>$40.00</span>
        </div>
        <div className="flex justify-between mb-3">
          <span>Total</span>
          <span>$140.00</span>
        </div>
      </div>
    </div>
  );
}
