import styled from 'styled-components';

const ReviewContainer = styled.div`
  margin-top: 20px;
`;

const ReviewList = styled.ul`
  list-style-type: none;
`;

const ReviewItem = styled.li`
  margin-bottom: 20px;
`;

const ReviewAuthor = styled.h5`
  margin: 0;
`;

const ReviewContent = styled.p`
  margin: 0;
`;

const NoReviewsMessage = styled.p`
  margin: 0;
`;

export {ReviewContainer, ReviewList, ReviewItem, ReviewAuthor, ReviewContent,NoReviewsMessage }