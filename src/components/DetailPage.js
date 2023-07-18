import { useContext } from "react";
import { useParams } from "react-router-dom";
import Kontext from "../store/context";

const DetailPage = () => {
  const { id } = useParams();
  const ctx = useContext(Kontext);

  const DetailItem = ctx.items.filter(
    (item) => item.id.toString() === id.toString()
  );
  console.log(DetailItem);
  // console.log(ctx.items);

  return (
    <div>
      <p>aaaa</p>
      {/* {ctx.items.map((item) => (item.id === id ? <p>{item.name}</p> : ""))} */}
    </div>
  );
};

export default DetailPage;

/* <div>
<p>{ctx.items[id].brand}</p>
<p>{ctx.items[id].category}</p>
<p>{ctx.items[id].description}</p>
<p>{ctx.items[id].discountPercentage}</p>
<p>{ctx.items[id].images}</p>
<p>{ctx.items[id].title}</p>
<p>{ctx.items[id].stock}</p>
<p>{ctx.items[id].rating}</p>
<p>{ctx.items[id].price}</p>
</div> */

// <ul>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// </ul>
