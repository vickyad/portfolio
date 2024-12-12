import Image from "next/image";
import Button from "./button";
import write from "../public/write.svg";

type Props = {
  dict: any;
  id: string;
};

export default function Product({ dict, id }: Props) {
  return (
    <div>
      <span>
        <Image alt={dict.products[id].altText} src={write} />
      </span>
      <h3>{dict.products[id].title}</h3>
      <p>{dict.products[id].description}</p>
      <Button dict={dict} key={"products.cart"} />
    </div>
  );
}
