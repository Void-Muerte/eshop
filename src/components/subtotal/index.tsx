import useBasketContext from "../../context/BasketContext"

function index() {
  const {state:{count, subtotal}} = useBasketContext()
  return (
    <div>
        <section className="flex items-center border-[1px] border-[#dddddd] rounded-[3px]  px-[10px] flex-col justify-between w-[300px] h-[150px] p-[20px] bg-[#f3f3f3]">
            <p>
                Subtotal ({count} items): <strong>{Intl.NumberFormat('en',{currency:'USD', style:'currency'}).format(subtotal)}</strong>
            </p>
            <small>
                <input type="checkbox" className="mr-[5px]" /> This order contains a gift
            </small>
            <button className="bg-[#ff9f00] rounded-[2px] w-full h-[30px] border-[1px] border-[#a88734] text-[#111]">Checkout</button>
        </section>
    </div>
  )
}

export default index