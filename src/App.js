// import logo from './logo.svg';
import './App.css';
let name = "PureDonkey";
function App() {
  return (
    <>{/* In case if you want to use other elements than you will have to enclose it in fragments */}
    <nav>
      {/* create a navbar */}

      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <h1>{name}</h1>
      <div className="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat cum eaque, nobis, nulla aspernatur minus explicabo nihil cumque eum quas obcaecati excepturi fugit voluptate beatae adipisci velit, quidem corrupti.</p>
      </div>
    </nav>
    </>
  );
}

export default App;
