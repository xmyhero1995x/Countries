import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import axios from "axios";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  });

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info navigate = {navigate} {...country} />}
    </>
  );
};
