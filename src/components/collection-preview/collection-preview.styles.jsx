import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 80rem) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 80rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }
`;
