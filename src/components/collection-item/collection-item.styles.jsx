import styled from 'styled-components';
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
  background: #f2f6f9;
  background: linear-gradient(#fff, #f2f6f9);
  box-shadow: 0 0 0 1px rgba(14, 41, 57, .12), 0 2px 5px rgba(14, 41, 57, .44), inset 0 -1px 2px rgba(14, 41, 57, .15);

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 80rem){
  
  }
  
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 25.5rem;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
    margin-right: 1rem;
`;
