import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFecthGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, []);

  return state;
};

export default useFecthGifs;
