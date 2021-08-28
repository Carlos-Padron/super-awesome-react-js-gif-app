import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import useFecthGifs from "../hooks/useFecthGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  /* const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]); */

  const { loading, data:images } = useFecthGifs(category);

  return (
    <>
      <h3>{category} </h3>

      {loading && "cargando" }
      {
        <div>
          <ol>
            {images.map((img) => {
              return <GifGridItem key={img.id} {...img} />;
            })}
          </ol>
        </div>
      }
    </>
  );
};

export default GifGrid;
