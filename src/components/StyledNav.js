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
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
     
    }
   
`;

export default StyledNav;