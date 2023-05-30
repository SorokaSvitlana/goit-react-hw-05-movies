import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
`;

const CastList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const CastItem = styled.li`
  text-align: center;
  margin: 10px;
`;

const CastImage = styled.img`
  width: 200px;
`;

const CastName = styled.h5`
  margin-top: 10px;
`;

const CastCharacter = styled.p`
  margin-top: 5px;
`;

export {Container, CastList, CastItem, CastImage, CastName, CastCharacter}