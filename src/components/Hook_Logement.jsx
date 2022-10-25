import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../datas/logements";

export const useAppartment = () => {
  const params = useParams();
  const id = params.id;
  const [appartment, setAppartment] = useState();
  const [notValidID, setNotValidID] = useState(false);
  const [pictures, setPictures] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchAppart = data.find((appart) => appart.id === id);
    if (fetchAppart) {
      setAppartment(fetchAppart);
      setNotValidID(false);
    } else {
      setNotValidID(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setPictures(appartment?.pictures ? appartment.pictures : []);
  }, [appartment]);

  useEffect(() => {
    if (notValidID) {
      navigate("not_found");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notValidID]);

  return {
    appartment,
    pictures,
  };
};
