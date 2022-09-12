import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20vw;
  position: fixed;
  right: 3rem;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

export const Status = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background: ${props => (props.status ? '#40b346' : '#ff4e55')};
`;

export const Avatar = styled.img`
  width: 4rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: #f3f6f9;
`;

export const Name = styled.p`
  font-size: 1.5rem;
`;
