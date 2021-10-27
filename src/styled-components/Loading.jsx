import styled from 'styled-components';

const LoadingContainer = styled.div`
  color: ${props => props.theme.lightAccent};
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <span>Loading...</span>
    </LoadingContainer>
  );
}