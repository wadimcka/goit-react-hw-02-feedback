import styled from 'styled-components';

export const BtnWrap = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
    margin: '0 auto',
    backgroundColor: 'white',
    border: 'none',
    marginBottom: 40,
  };
});

export const FeedbackBtn = styled('button')(() => {
  return {
    padding: '10px 20px',
    borderRadius: 8,
    border: ' 0.5px grey',
    textTransform: 'capitalize',

    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

    '&:nth-child(1)': {
      boxShadow: '10px 9px 22px -9px rgba(45, 230, 27, 0.63)',
      '&:hover': {
        backgroundColor: 'rgba(45, 230, 27, 0.63)',
        boxShadow: '10px 9px 22px -9px rgba(109, 114, 109, 0.63)',
      },
    },
    '&:nth-child(2)': {
      boxShadow: '10px 9px 22px -9px rgba(229, 243, 34, 0.63)',
      '&:hover': {
        backgroundColor: 'rgba(229, 243, 34, 0.63)',
        boxShadow: '10px 9px 22px -9px rgba(109, 114, 109, 0.63)',
      },
    },
    '&:nth-child(3)': {
      boxShadow: '10px 9px 22px -9px rgba(245, 52, 5, 0.63)',
      '&:hover': {
        backgroundColor: 'rgba(245, 52, 5, 0.63)',
        boxShadow: '10px 9px 22px -9px rgba(109, 114, 109, 0.63)',
      },
    },
  };
});
