import styled from 'styled-components';

export const StatSection = styled.section`
  width: 25vw;
  text-align: center;
  display: block;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
`;

export const Title = styled.h2`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  background-color: #ffffff;
  color: #4f5457;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 4);
  height: 5rem;
`;

export const StatLabel = styled.span`
  color: #ffffff;
`;

export const StatNumber = styled(StatLabel)`
  font-size: 1.5rem;
`;
