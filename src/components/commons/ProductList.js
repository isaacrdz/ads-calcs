import React from "react";

const ProductList = ({ products, onChange }) => (
  <React.Fragment>
    {products.map((product, i) => (
      <tr key={i}>
        <td>{product.productName}</td>
        <td>
          <input
            className="form-control"
            type="number"
            value={product.count}
            onChange={e => onChange(i, parseInt(e.target.value) || 0)}
          />
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export default ProductList;
