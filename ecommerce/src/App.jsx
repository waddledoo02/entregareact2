
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetail from './components/ItemDetail/ItemDetail'
function App() {

  return (
    <>
  <NavBar></NavBar>
  <ItemListContainer texto='Esteban'></ItemListContainer>
  <ItemDetail></ItemDetail>
  </>
  )
  }
export default App
