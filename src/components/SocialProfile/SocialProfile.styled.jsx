import styled from 'styled-components';

export const Profile = styled.div`
  display: block;
  width: 25vw;
  margin-bottom: 2rem;
  text-align: center;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
`;

export const Description = styled.div`
  background-color: #ffffff;
  padding: 2rem 0;
`;

export const Avatar = styled.img`
  margin: 0 auto 2rem;
  width: 50%;
  border-radius: 50%;
  background-color: #f3f6f9;
`;

export const Name = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-bottom: 0.5rem;
  color: #768696;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid #e4e9f0;
  background-color: #f3f6f9;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 5rem;
  background-color: #f3f6f9;

  &:not(:last-child) {
    border-right: 1px solid #e4e9f0;
  }
`;

export const Label = styled.span`
  color: #768696;
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: #1f3349;
`;
