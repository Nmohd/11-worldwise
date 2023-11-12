import { useParams,useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  
  const { id } = useParams();
  // console.log(x);
  // const { id } = useParams();

  return (
    <div>
      {" "}
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      ;
    </div>
  );
};

export default City;
