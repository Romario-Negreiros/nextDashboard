import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: 1rem;
  background-color: ${({ theme: { bgs } }) => bgs.primary};
  border-color: ${({ theme: { contrasts } }) => contrasts.secondary};
`

export const Logo = styled.h1`
  color: ${({ theme: { contrasts } }) => contrasts.primary};
  font-size: clamp(1.8rem, 1.8vw, 2.6rem);
  span {
    color: ${({ theme: { elements } }) => elements.yellowish};
  }
`

export const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  ul {
    background-color: ${({ theme: { bgs } }) => bgs.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    list-style: none;
  } li {
    width: 100%;
    text-align: center;
    padding: 2rem;
    color: ${({ theme: { contrasts } }) => contrasts.primary};
    font-size: clamp(1.4rem, 1.4vw, 2.2rem);
    transition: background-color 0.6s;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      :hover {
        background-color: ${({ theme: { elements } }) => elements.blueish}; 
      }
    }
  }
`

export const BurguerMenu = styled.div`
  span {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme: { bgs } }) => bgs.primary};
    width: 1rem;
    height: 0.2rem;
  }
`
