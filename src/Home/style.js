import styled from "styled-components"

export const HomeImage = styled.div`

animation-duration: 3s;
animation-name: slidein;
animation-iteration-count: infinite;
animation-direction: alternate;

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 10%;
    width: 100%;
  }
}
`