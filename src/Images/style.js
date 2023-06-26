import styled from 'styled-components'

export const FavouriteButton =styled.button`
color: Black;
font-size: 25px;
border-color: #324A5F;
border-radius: 5%; 
background-color: #DCF763;
animation-name: example;
animation-duration: 3s;
animation-iteration-count: infinite;

@keyframes example {
    from {background-color: red;}
    to {background-color: purple;}
  }
`;