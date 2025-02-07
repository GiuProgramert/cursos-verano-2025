import Header from "./Header";
import Form from "./Form";
import Detail from "./Detail";

export default function Checkout() {
  return (
    <section className="my-10">
      <Header />

      <div className="grid grid-cols-2 pb-10">
        <Form />
        <Detail />
      </div>
    </section>
  );
}
