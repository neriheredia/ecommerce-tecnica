import styled from 'styled-components';

const App = () => {
  return <StyledView>Hello world!!</StyledView>;
};

const StyledView = styled.div`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default App;
