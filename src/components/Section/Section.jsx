import React from 'react';
import { Container, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
