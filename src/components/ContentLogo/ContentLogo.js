import React from 'react'
import styled from 'styled-components'
import { fadeInY } from '../../styles/animation'

const ImageContainer = styled.div`
  background-repeat: no-repeat;
  display: inline-block;
  width: ${(props) => `${props.option.width}px`};
  height: ${(props) => `${props.option.height - props.option.padding}px`};
  padding: ${(props) => `${props.option.padding}px 0 0 0`};
  background-image: url(${(props) => props.option.imageUrl});
  background-size: ${(props) =>
    `${props.option.width}px ${props.option.height}px`};
  text-align: center;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  opacity: 0;
  animation: ${fadeInY} 0.7s ease-in-out forwards;
`

function ContentLogo({
  option = {
    width: 0,
    height: 0,
    padding: 0,
    text: '',
  },
}) {
  return (
    <ImageContainer option={option}>
      {!!option.text ? option.text : null}
    </ImageContainer>
  )
}

export default ContentLogo
