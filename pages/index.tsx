import styles from "../styles/Home.module.css";

import { DeliveryLayout } from "../components/layout";
import deliveryApi from "../api/deliveryApi";
import { useEffect, useState } from "react";
import { ICategory } from "../interface";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Categories from "../components/categories/Categories";
import { Slider } from "../components/categories/slider";

export default function Home() {
  const [categories, setcategorys] = useState<ICategory[]>();

  useEffect(() => {
    getCategorys();
  }, []);

  const getCategorys = async () => {
    const { data } = await deliveryApi.get("/category");
    setcategorys(data);
  };

  return (
    <>
      {/* <DeliveryLayout title={"Delivery App"} pageDescription={"Delivery App"}>
      <ul>
        {categories?.map(({ name }, any) => {
          return (
            <li key={any}>
              <span style={{ fontSize: "5rem" }}>{name}</span>
            </li>
          );
        })}
      </ul>
    </DeliveryLayout> */}

      <Navbar />
      <Categories />
      <Card />
    </>
  );
}
