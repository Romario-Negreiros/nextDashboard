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

export const Navigation = styled.nav<NavigationProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  transform: translateY(-50rem);
  border-bottom: 0.5rem solid ${({ theme: { elements } }) => elements.blueish};
  background-color: ${({ theme: { bgs } }) => bgs.secondary};
  ${({ isMenuOpen }) => (isMenuOpen ? 'transform: translateY(0)' : '')};
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    list-style: none;
  }
  li {
    width: 100%;
    text-align: center;
    padding: 2rem;
    color: ${({ theme: { contrasts } }) => contrasts.primary};
    font-size: clamp(1.4rem, 1.4vw, 2.2rem);
    cursor: pointer;
    @media screen and (min-width: 768px) {
      :hover {
        background-color: ${({ theme: { elements } }) => elements.blueish};
      }
    }
  }
`

export const BurguerMenu = styled.div`
  z-index: 2;
  @media screen and (min-width: 576px) {
    display: none;
  }
  span {
    display: block;
    margin-bottom: 0.5rem;
    background-color: ${({ theme: { elements } }) => elements.yellowish};
    width: 2rem;
    height: 0.2rem;
  }
  .active:nth-child(1) {
    transform: translate(0, 2px) rotate(45deg);
  }
  .active:nth-child(2) {
    transform: translate(0, -5px) rotate(135deg);
  }
`
