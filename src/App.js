// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>{/* In case if you want to use other elements than you will have to enclose it in fragments */}
      
    <Navbar title = "TextUtils" aboutText="About TextUtils"/>
    {/* <Navbar /> This calls the default type
    {/* To use props first write the text in the component using props.xyzname[also write props in the default export function] and then use that propnamed variable here and use it */}
    
    <div className="container my-3">{/* .container is the default class of bootstrap,my-3 is margin y of 3 */}
      <TextForm heading="Enter your text to analyze below:"/>
      {/* <About/> */}
    </div>

    </>
  );
}

export default App;