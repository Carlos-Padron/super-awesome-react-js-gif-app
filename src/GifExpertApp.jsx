import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  return (
    <>
      <h2>Gift expert app</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((cat) => {
          return  <GifGrid key={cat} category={cat} /> 
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
