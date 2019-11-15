import styled from 'styled-components';



const StyledNav = styled.nav`
max-width: 120rem;
display: flex;
text-decoration: none;
margin: auto;
padding: 0 2rem;;
justify-content: space-between;
height: 5rem;

& a {
    color: #69C8ECFF;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #E762D7FF;
     
    }
   
`;

export default StyledNav;