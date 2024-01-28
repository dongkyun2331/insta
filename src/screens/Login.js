import { isLoggedInVar } from "../apollo";
import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  background-color: tomato;
`;

const Title = styled.h1``;

export const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
};
