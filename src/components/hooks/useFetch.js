import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(api) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function getMeals() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        api
      );
      
      setList(data.meals);
    } catch (error) {
      setList(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getMeals();
  }, []);

  return { list, loading };
}
