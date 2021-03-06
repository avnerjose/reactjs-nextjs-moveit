import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    margin-top: 2rem;
  }
  @media (max-width: 720px) {
    &{
      height: 100%;
    }
    section {
      grid-template-columns: 1fr;
      margin: 3rem auto;
      width: 90%;
      gap: 2rem;
    }
  }
`;
