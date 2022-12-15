import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme: { elements } }) => elements.blueish};
  width: 6rem;
  height: 1.5rem;
  border-radius: 1rem;
  div {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme: { elements } }) => elements.yellowish};
    transition: transform 0.6s;
    ${({ theme: { title } }) =>
      title === 'dark' ? 'transform: translate(0, -0.75rem)' : 'transform: translate(3rem, -0.75rem)'}
  }
  @media screen and (min-width: 576px) {
    div {
      cursor: pointer;
    }
  }
`
