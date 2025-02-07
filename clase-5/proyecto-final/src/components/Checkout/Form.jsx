import Button from "../Button";
import Check from "../Check";
import Input from "../Input";

export default function Form() {
  return (
    <form className="pr-10 pl-40 pt-10 flex flex-col gap-6">
      <section>
        <div className="flex justify-between items-center text-base mb-6">
          <h3 className="text-[#484848] text-[42px] font-volkhov">Contact</h3>
          <span>
            Have an account?{" "}
            <a href="#" className="text-[#1456FF]">
              Create Account
            </a>
          </span>
        </div>
        <Input placeholder="Email Address" />
      </section>

      <section>
        <h3 className="text-[#484848] text-[42px] font-volkhov">Delivery</h3>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <Input placeholder="Country / Region" className="col-span-2" />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Address" className="col-span-2" />
          <Input placeholder="City" />
          <Input placeholder="Postal Code" />
        </div>

        <Check id="save1" label="Save This Info for future" />
      </section>

      <section>
        <h3 className="text-[#484848] text-[42px] font-volkhov">Payment</h3>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <Input placeholder="Credit Card" className="col-span-2" />
          <Input placeholder="Card Number" className="col-span-2" />
          <Input placeholder="Expiration Date " />
          <Input placeholder="Security Code" />
          <Input placeholder="Card Holder Name" className="col-span-2" />
        </div>

        <Check id="save2" label="Save This Info for future" />
      </section>

      <Button>Pay Now</Button>
      <span className="text-[#484848] text-center text-xs">Copyright © 2022 FASCO . All Rights Reseved.</span>
    </form>
  );
}
