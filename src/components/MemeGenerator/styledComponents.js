// Style your components here
import styled from 'styled-components'

export const Cont = styled.div`
  background-image: url('${props => props.background}');
  color: white;
  font-size: ${props => props.fontSize};
`
