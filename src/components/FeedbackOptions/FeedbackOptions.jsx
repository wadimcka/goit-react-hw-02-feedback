import React from 'react';
import { BtnWrap, FeedbackBtn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnWrap>
      {options.map(option => (
        <FeedbackBtn
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackBtn>
      ))}
    </BtnWrap>
  );
}
