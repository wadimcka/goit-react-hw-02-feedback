import styled from 'styled-components';

export const Container = styled('div')(() => {
  return {
    width: 800,
    padding: 40,
    margin: '0 auto',
  };
});

export const Title = styled('h2')(() => {
  return {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40,
  };
});
