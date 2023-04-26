import { Fragment } from "react";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <br></br>
    </div>
  );
};

export default CategoryPreview;
