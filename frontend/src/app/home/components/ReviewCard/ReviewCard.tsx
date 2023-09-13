import styled from "styled-components";
import starEmpty from "./star-empty.svg";
import starFull from "./star-full.svg";
import starHalf from "./star-half.svg";
import user from "./user.png";

export type ReviewCardProps = {
  songCover: string;
  songTitle: string;
  artistName: string;
  rating: number;
  title: string;
  content: string;
  authorName: string;
  authorUsername: string;
};

const CardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-height: 150px;
  row-gap: 16px;
  max-width: 1200px;
  height: 600px;
`;

const SongHeader = styled.div`
  column-gap: 16px;
  display: flex;
`;

const SongCover = styled.img`
  border-radius: 8px;
`;

const SongTitle = styled.a`
  color: black;
  font-weight: 700;
  margin-bottom: 5px;
  text-decoration: none;
`;

const ArtistName = styled.div`
  margin-bottom: 5px;
`;

const ReviewTitle = styled.div`
  font-weight: 700;
`;

const AuthorName = styled.div`
  font-weight: 700;
`;

const AuthorInfo = styled.div`
  display: flex;
  column-gap: 8px;
`;

const AuthorUsername = styled.div`
  font-size: 11px;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
`;

function* ratingStars(rating: number) {
  for (let i = 0; i < Math.floor(rating / 2); i++) {
    yield <img src={starFull} width={16} height={16} />;
  }

  if (rating % 2 === 1) {
    yield <img src={starHalf} width={16} height={16} />;
  }

  for (let i = 0; i < 5 - Math.ceil(rating / 2); i++) {
    yield <img src={starEmpty} width={16} height={16} />;
  }
}

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <CardWrapper>
      <SongHeader>
        <a href="#">
          <SongCover src={props.songCover} width={100} height={100} />
        </a>
        <div>
          <SongTitle href="#">{props.songTitle}</SongTitle>
          <ArtistName>{props.artistName}</ArtistName>
          <div>{[...ratingStars(props.rating)]}</div>
        </div>
      </SongHeader>

      <ReviewTitle>{props.title}</ReviewTitle>

      <div>{props.content}</div>

      <AuthorInfo>
        <AuthorImage src={user} width={32} height={32} />
        <div>
          <AuthorName>{props.authorName}</AuthorName>
          <AuthorUsername>@{props.authorUsername}</AuthorUsername>
        </div>
      </AuthorInfo>
    </CardWrapper>
  );
};

export default ReviewCard;
