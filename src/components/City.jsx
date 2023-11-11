import { useParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const {id} = useParams();
  // console.log(x);
  // const { id } = useParams();

  return <h3 >City{id}</h3>;
};

export default City;
