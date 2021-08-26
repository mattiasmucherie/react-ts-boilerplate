import styled from 'styled-components'
import GlobalStyle from './styles/globalStyles'

const Title = styled.h1`
  font-family: 'Arial';
`

const App = () => (
  <>
    <GlobalStyle />
    <div>
      <Title>React TS template</Title>
      <footer>footer</footer>
    </div>
  </>
)

export default App
