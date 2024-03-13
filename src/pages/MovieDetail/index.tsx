import apiRequest from "@/apis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { type, id } = useParams<{
    type?: "movie" | "tv";
    id: string | undefined;
  }>();

  const [detail, setDetail] = useState(null);
  const [casts, setCasts] = useState([]);

  const getDetail = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (response && response.data) {
        setDetail(response.data);
      }
    } catch (error) {
      console.error(`GetDetail Error.. ${error}`);
    }
  };

  const getCast = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/credits`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.cast &&
        response.data.cast.length
      ) {
        setCasts(response.data.cast.splice(0, 6));
      }
    } catch (error) {
      console.error(`GetCast Error.. ${error}`);
    }
  };

  useEffect(() => {
    getDetail();
    getCast();
  }, [type, id]);

  return <div>MovieDetail</div>;
}
