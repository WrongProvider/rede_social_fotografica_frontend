import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <AppWrapper>
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      <h1>Rede social em foto MERN</h1>
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  background-color: #f1f2f5;
`
export default App;
