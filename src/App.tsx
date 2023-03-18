import styled from 'styled-components';

const App = () => {
  return <StyledView>Hello world!!</StyledView>;
};

const StyledView = styled.div`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

export default App;
