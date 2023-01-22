import './App.css';
import logo from "./assets/Orbi..svg";

function App() {
  return (
<body>
  <header class = "logo">
    <img src = {logo} alt = "orbi logo"/>
  </header>
    <div className="rings">
      <Ring radius="4" width="3.5" color="#D0DFDE" perct="45"/>
      <Ring radius="8" width="3.5" color="#A8AEA7" perct="63"/>
      <Ring radius="12" width="3.5" color="#67675E" perct="85"/>
    </div>
    {/* This is the <span class="special-text">TML</span> body of the addon. */}
</body>
  );
}

function Test() {
  return (<h1>Hello m8</h1>)
}

function Ring(props) {
  let radius = Number(props.radius);
  let width = Number(props.width);
  let perct = Number(props.perct);
  let color = props.color;
  return (
  <svg viewBox="0 0 36 36" className="circular-chart">
    <path className="circle"
      d={"M18 " + (18-(radius+width)) +
        " a " + String(radius) + " " + String(radius) + " 0 0 1 0 " + String(radius*2) +
        " a " + String(radius) +  " " + String(radius) + " 0 0 1 0 " + String(-radius*2)}
      fill="none"
      stroke={color}
      stroke-width={String(width)}
      stroke-dasharray={String(3.1415*radius*2*perct/100) + ", " + String(3.1415*radius*2)}
    />
  </svg>
  )
}

export default App;