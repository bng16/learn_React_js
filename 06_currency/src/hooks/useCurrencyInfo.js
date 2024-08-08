import {  useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const[data,setData]=useState({})

  useEffect(() => {
    const fetchData=async () => {
      try{
        const response=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        const result = await response.json();
        setData(result[currency]);
      }catch(error){
      console.error(error);
      }
    }
    fetchData();

  },[currency])

  return data;

};

export default useCurrencyInfo;
