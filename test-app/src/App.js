import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";



function App() {

  const [productData, setProductData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setProductData(actualData.products);
        console.log(productData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
   <div className="App">
    <NavBar/>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
        {productData.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
            <td>
              <img src={item.thumbnail} alt="products" height={100} width={200} />
            </td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;
