import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setServices,
  setHome,
  setBlog,
  setMembers,
  setCategories,
} from "../features/update";

const useGetData = (url, resource) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const token = process.env.REACT_APP_TOKEN_KEY;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data && data.data) {
            if (resource === "services") {
              dispatch(setServices(data));
            } else if (resource === "home") {
              dispatch(setHome(data));
            } else if (resource === "blog") {
              dispatch(setBlog(data));
            } else if (resource === "members") {
              dispatch(setMembers(data));
            } else if (resource === "categories") {
              dispatch(setCategories(data));
            }
            setDataLoaded(true);
          } else {
            console.log("Error: No data found");
          }
        } else {
          console.log("Error: ", response.statusText);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getData();
  }, [url, resource, dispatch]);

  return dataLoaded;
};

export default useGetData;
