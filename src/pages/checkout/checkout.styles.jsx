import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  button {
    margin-left: auto;
    margin-top: 5rem;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 3.6rem;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: red;
`;
