import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const products = [
  {
    id: "fruit1",
    name: "Apple",
    price: 7,
    description: "This is the Best kashmiri apple you can buy nearby!",
  },

  {
    id: "fruit2",
    name: "mango",
    price: 8,
    description: "This is the best mango in the market!",
  },

  {
    id: "fruit3",
    name: "mosambi",
    price: 10,
    description: "Best Fruit for summer",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite Fruits</h2>
      <ul>
        {products.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
