import styled from "styled-components";

export const CaloriesPrice = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6rem;
`;

export const Calories = styled.div`
  margin-left: 15rem;
  font-family: var(--font-text);
  color: rgba(68, 20, 20, 0.721);
  font-size: 1.25rem;

  @media (max-width: 1150px) {
    margin-left: 8rem;
  }
  @media (max-width: 650px) {
    font-size: 1.1rem;
  }
`;

export const Price = styled.div`
  display: flex;
  margin-left: 4.5rem;
  font-family: var(--font-text);
  color: rgba(68, 20, 20, 0.721);
  font-size: 1.25rem;
`;

export const New = styled.div`
  font-size: 1rem;
  color: white;
  background-color: #bf0008;
  border-radius: 10%;
  display: flex;
  width: 50px;
  justify-content: center;
  letter-spacing: 0.065em;
  margin-left: 8rem;
  margin-top: -3.37rem;
`;
