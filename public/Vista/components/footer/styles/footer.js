import styled from 'styled-components';
export const Baner = styled.canvas`
    width: 1000px;
    padding: 80px 60px;
    background: #EAEAEA;

`;
export const Container = styled.div`
    padding: 1px 60px;
    background: #D89865;
    border: solid 3px ;
    position: fixed;
    position: relative;

 
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 60px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #050000;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color:#F5E8E8 ;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #050000;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Etiqueta = styled.label`
font-size: 24px;
color: #050000;
margin-bottom: 40px;
font-weight: bold;
`;
