import wojak from '../../images/wojak.png';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import '../../Main.css';

function Main() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={wojak} className="App-logo" alt="logo" />        
      </header>
      <Footer/>
    </div>
  );
  }
  
  export default Main;
  