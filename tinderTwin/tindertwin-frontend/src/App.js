import './App.css';
import Header from './component/Header';
import Cards from './component/Cards'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header/>
      {/* body */}
      <Cards/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
