import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color};
`;

export const Wrapper = styled.div`
  p {
    color: blue;
  }
  span {
    background-color: darksalmon;
  }
`;
