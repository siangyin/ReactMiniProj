import React from 'react';
import {white, primary, secondary, success, warning, danger } from '../colors'
import styled, {css} from 'styled-components'


export default function StyledComponents(props) {

  const sharedStyles = css`
  height: ${props => (props.standard ? '40px' : '60px')};
`

  const Container = styled.div`
   color: ${warning};
  `

  const activeButton = () => {

  }

  const Button = styled.button`
    /* background-color: ${props.primary ? primary : secondary}; */
    background-color: ${props => {
      switch(true) {
        case props.primary : return primary; 
        case props.secondary : return secondary; 
        case props.success : return success; 
        default : warning
      }
    }}};
    padding: 7px 14px;
    margin:0 5px;
    border-radius: ${props => {
      console.log('Button - props', props)
      return props.primary == 'blue' ? '20px' : '0'
    }};
    border: 1px solid transparent;
    ${props => sharedStyles};

    &:hover {
      background-color: red;
  }
  `

  return (
    <Container>
      <h2>Styled Components</h2>
      <Button primary standard>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button success>Success</Button>
    </Container>
  );
}
