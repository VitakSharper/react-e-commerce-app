import styled from "styled-components";
import {Link} from "react-router-dom";


export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  
  @media screen and (max-width: 80rem){
  height: 6rem;
  padding: 1rem;
  margin-bottom: 2rem;
  }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    
 @media screen and (max-width: 80rem){
  width: 5rem;
  padding: 0;
  }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    justify-content: flex-end;
    
 @media screen and (max-width: 80rem){
 width: 80%;
  }     
`;

export const OptionLink = styled(Link)`
   padding: 1rem 1.5rem;
   cursor: pointer;
`;

