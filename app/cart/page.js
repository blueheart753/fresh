import 작명 from './data.js';
console.log(작명);
export default function cart() {
  let 장바구니 = ['토마토', '감자', '초코하임', '칸쵸'];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem items={장바구니[0]} />
      <CartItem items={장바구니[1]} />
      <CartItem items={장바구니[2]} />
      <CartItem items={장바구니[3]} />
    </div>
  );
}

const CartItem = props => {
  return (
    <div className="cart-item">
      <p>{props.items}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};
