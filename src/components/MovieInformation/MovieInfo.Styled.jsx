import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 20px
`;

const MovieImage = styled.img`
  width: 200px;
  margin-right: 20px;
`;

const MovieDetails = styled.ul`
  list-style-type: none;
`;

const MovieTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

const UserScore = styled.p`
  margin: 0;
`;

const OverviewTitle = styled.h3`
  margin: 20px 0 10px;
`;

const OverviewText = styled.p`
  margin: 0;
`;

const GenresTitle = styled.h4`
  margin: 20px 0 10px;
`;

const GenresText = styled.p`
  margin: 0;
`;

const MovieDetailsContainer = styled.li`
  margin-bottom: 20px;
`;

export {Container, MovieImage, MovieDetails, MovieTitle, UserScore, OverviewTitle, OverviewText, GenresTitle,GenresText, MovieDetailsContainer   }