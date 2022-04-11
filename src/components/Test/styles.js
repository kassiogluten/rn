import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.roxo};
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.rosaxoq};
`;
export const Title = styled.Text`
  color: white;
`;
export const Title1 = styled.Text`
  color: ${({ theme }) => theme.colors.rosaxoq};
  font-family: ${({ theme }) => theme.fonts.black};
`;
