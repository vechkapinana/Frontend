//лого, ссылки на разные странички, прописать компоненты здесь и можно добавить в 
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
//import im from './4.jpeg'
function App() {
  return (
    <div className="App">
        <Header />
        <Content/>
        <Footer/>

    </div>
  );
}

export default App;
