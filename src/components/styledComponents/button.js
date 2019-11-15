import styled from 'styled-components';
const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 2.4rem;
background:${props =>props.bien? "var(--mainYellow)":"transparent"}; 

border: 0.09rem solid var(--lightBlue);
border-color: ${props =>props.cart? "var(--mainYellow)":"var(--lightBlue)"};
color: ${prop=>prop.cart? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
background:${p=>p.cart? "var(--mainYellow)": "var(--lightBlue)"};
color: var(--mainBlue);
&:hover {
    background:var(--lightBlue);
    color: tomato;
}
&focus {
    outline: none;
}

`


const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}


`;

export { NavWrapper, ButtonContainer};