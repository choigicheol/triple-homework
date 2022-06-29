import React from 'react'
import styled from 'styled-components'

const AwardImage = styled.div`
  background-repeat: no-repeat;
  display: inline-block;
  color: rgba(58, 58, 58, 0.8);
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  margin-right: ${(props) => (props.isLastItem ? '0px' : '39px')};
  white-space: pre-wrap;
  background-image: url(${(props) => props.imageUrl});
`

function AwardItem({ imageUrl, text, isLastItem }) {
  return (
    <AwardImage imageUrl={imageUrl} isLastItem={isLastItem}>
      {text}
    </AwardImage>
  )
}

export default AwardItem
