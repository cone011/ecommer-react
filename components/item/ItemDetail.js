import classes from "./ItemDetail.module.css";

const ItemDetail = (props) => {
  return (
    <li>
      <figure>
        <blockquote>
          <img src={props.sourceImg} alt={props.imgName} />
        </blockquote>
        <figcaption>{props.nameItem}</figcaption>
        <figcaption>{`Price: $ ${props.price}`}</figcaption>
        <figcaption>{`Available stock: ${props.stock}`}</figcaption>
      </figure>
    </li>
  );
};

export default ItemDetail;
