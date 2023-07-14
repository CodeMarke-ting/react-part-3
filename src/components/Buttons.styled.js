import styled from "styled-components";

export const DefaultButton = styled.button`
  border: none;
  background-color: red;
  font-size: 1rem;
  padding: ${(props) => (props.large ? "2rem" : "1rem")};
  &:hover {
    background-color: green;
  }
  ${(props) => console.log(props)}
`;

export const PrimaryButton = styled(DefaultButton)`
  border: 2px solid white;
  background: none;
`;
