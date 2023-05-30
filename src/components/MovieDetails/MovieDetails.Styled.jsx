import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
`;

const AdditionalInfoTitle = styled.h2`
  margin-bottom: 10px;
`;

const AdditionalInfoList = styled.ul`
  list-style-type: none;
`;

const AdditionalInfoItem = styled.li`
  margin-bottom: 10px;
`;

const AdditionalInfoLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #000;
  }
`;

export{AdditionalInfoContainer, AdditionalInfoTitle, AdditionalInfoList, AdditionalInfoItem, AdditionalInfoLink  }