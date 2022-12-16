import styled from 'styled-components'

interface NavigationProps {
  isMenuOpen: boolean
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: clamp(1.5rem, 1.5vw, 2rem);
  background-color: ${({ theme: { bgs } }) => bgs.secondary};
  border-bottom: 0.1rem solid ${({ theme: { elements } }) => elements.blueish};
  section {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

export const Logo = styled.h1`
  color: ${({ theme: { contrasts } }) => contrasts.primary};
  font-size: clamp(1.8rem, 1.8vw, 2.6rem);
  span {
    color: ${({ theme: { elements } }) => elements.red};
  }
`

export const Navigation = styled.nav<NavigationProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  transform: translateY(-50rem);
  border-bottom: 0.5rem solid ${({ theme: { elements } }) => elements.blueish};
  background-color: ${({ theme: { bgs } }) => bgs.secondary};
  transition: transform 0.6s;
  ${({ isMenuOpen }) => (isMenuOpen ? 'transform: translateY(0)' : '')};
  @media screen and (min-width: 576px) {
    transform: translateY(0);
    position: unset;
    border-bottom: none;
    background-color: unset;
    width: initial;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    @media screen and (min-width: 576px) {
      flex-direction: row;
      gap: 0rem;
      padding: 0;
    }
  }
  li {
    text-align: center;
  }
  a {
    color: ${({ theme: { contrasts } }) => contrasts.primary};
    font-size: clamp(1.4rem, 1.4vw, 1.6rem);
    transition: color 0.6s;
    padding: 2rem;
    @media screen and (min-width: 576px) {
      cursor: pointer;
      padding: 0.5rem 1rem;
      :hover {
        color: ${({ theme: { elements } }) => elements.red};
      }
    }
  }
`

export const BurguerMenu = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 576px) {
    display: none;
  }
  span {
    display: block;
    background-color: ${({ theme: { elements } }) => elements.red};
    width: 2rem;
    height: 0.2rem;
    transition: transform 0.6s;
  }
  .active:nth-child(1) {
    transform: translate(0, 2px) rotate(45deg);
  }
  .active:nth-child(2) {
    transform: translate(0, -5px) rotate(135deg);
  }
`
