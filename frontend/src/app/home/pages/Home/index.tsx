import React, { useEffect } from "react";
import { Wallpaper } from "./style";
import styled from "styled-components";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import axios from "axios";

interface Review {
  id: number;
  title: string;
  description: string;
  rating: number;
  artistName: string;
  author: string;
  songTitle: string;
  songCover: string;
}

export const TableDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 60vw;
  flex-direction: column;
  gap: 12%;
  margin: auto;
`;

const Home: React.FC = () => {
  const [data, setData] = React.useState<Review[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/reviews/", {});

      const data = response.data.reviews;
      setData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wallpaper>
      <TableDiv>
        {data.map((review: Review) => (
          <ReviewCard
            key={review.id} // Certifique-se de incluir uma chave única
            songCover={review.songCover}
            songTitle={review.songTitle}
            artistName={review.artistName}
            rating={review.rating}
            title={review.title}
            content={review.description}
            authorName="Ana"
            authorUsername="aninha"
            authorAvatar="https://avatars.githubusercontent.com/u/60005589?v=4"
          />
        ))}
      </TableDiv>
    </Wallpaper>
  );
};

export default Home;
