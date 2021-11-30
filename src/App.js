// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>{/* In case if you want to use other elements than you will have to enclose it in fragments */}
      
    <Navbar title = "TextUtils" aboutText="About TextUtils"/>
    
    {/* <Navbar /> {/* This calls the default type */}

    {/* To use props first write the text in the component using props.xyzname[also write props in the default export function] and then use that propnamed variable here and use it */}
    </>
  );
}

export default App;