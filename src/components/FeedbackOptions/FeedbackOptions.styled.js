import styled from 'styled-components';

export const BtnWrap = styled('button')(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    gap: 80,
    justifyContent: 'space-between',
    margin: '0 auto',
    backgroundColor: 'white',
    border: 'none',
  };
});

export const FeedbackBtn = styled('button')(() => {
  return {
    padding: '12px 24px',
  };
});
