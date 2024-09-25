import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import axios from "axios";

function Product() {
  const fetchData = async () => {
    const resp = await axios.get(
      "http://localhost:8000/api/v1/product/getAllProducts"
    );

    setProducts(resp.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  let handleAddCart = (data) => {
    console.log(data);
    dispatch(addItem(data));
  };
  return (
    <div>
      <div className="product-listing">
        <aside className="filters">
          <h4>Filters</h4>
          <button className="clear-filters">Clear Filters</button>
          <div className="filter-group">
            <h5>Categories</h5>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("Jackets")}
                // onChange={() => handleCategoryChange("Jackets")}
              />
              Jackets
            </label>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("Fleece")}
                // onChange={() => handleCategoryChange("Fleece")}
              />
              Fleece
            </label>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("Sweatshirts & Hoodies")}
                // onChange={() => handleCategoryChange("Sweatshirts & Hoodies")}
              />
              Sweatshirts & Hoodies
            </label>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("Sweaters")}
                // onChange={() => handleCategoryChange("Sweaters")}
              />
              Sweaters
            </label>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("Shirts")}
                // onChange={() => handleCategoryChange("Shirts")}
              />
              Shirts
            </label>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("T-Shirts")}
                // onChange={() => handleCategoryChange("T-Shirts")}
              />
              T-Shirts
            </label>
            <label>
              <input
                type="checkbox"
                // checked={filters.categories.includes("Pants & Jeans")}
                // onChange={() => handleCategoryChange("Pants & Jeans")}
              />
              Pants & Jeans
            </label>
          </div>

          <div className="filter-group">
            <h5>Color</h5>
            <div className="color-options">
              {[
                "#008080",
                "#ff4040",
                "#ffa500",
                "#0000ff",
                "#800080",
                "#008000",
              ].map((color) => (
                <button
                  key={color}
                  // className={`color-circle ${
                  //   filters.colors.includes(color) ? "selected" : ""
                  // }`}
                  style={{ backgroundColor: color }}
                  // onClick={() => handleColorChange(color)}
                ></button>
              ))}
            </div>
          </div>
        </aside>

        <main className="product-grid">
          <div className="product-grid-header">
            <select
            // value={filters.sortBy} onChange={handleSortChange}
            >
              <option value="Popular">Popular</option>
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
            <span>Showing 1003 Products</span>
          </div>

          <div className="products">
            {products.map((data) => {
              return (
                <div key={data.id + Math.random()} className="product-card">
                  <div className="product-image"></div>
                  <div className="product-info">
                    <p>{data.desc}</p>
                    <p>{data.name}</p>
                    <p>${data.price}</p>
                  </div>
                  <button onClick={() => handleAddCart(data)}>Add</button>
                </div>
              );
            })}
          </div>

          <button className="load-more">Load more products</button>
        </main>
      </div>
    </div>
  );
}

export default Product;
