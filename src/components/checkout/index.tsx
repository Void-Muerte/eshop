import useBasketContext from "../../context/BasketContext";
import Subtotal from "../subtotal";
import CheckoutProduct from "./CheckoutProduct";

function index() {
  const {
    state: { products },
  } = useBasketContext();
  return (
    <div className="flex items-center justify-center">
      <div className="flex sm:flex-row max-w-[1500px]  p-[20px] flex-col-reverse bg-white max-h-max">
        <section>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="ad"
            className="w-full mb-[10px]"
          />
          <section className="flex sm:flex-row flex-col-reverse w-full justify-between">
            <section className="min-w-[75%]">
              <div>
                <h2 className="mr-[10px] border-b-[1px]  p-[10px]">
                  Your shopping basket
                </h2>
                <div className="flex flex-col py-2">
                  {products.map((product) => (
                    <CheckoutProduct key={product.id} {...product} />
                  ))}
                </div>
              </div>
            </section>
            <section className="min-w-[200px] p-[10px]">
              <Subtotal />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}

export default index;
