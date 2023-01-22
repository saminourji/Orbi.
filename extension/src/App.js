import './App.css';
import logo from "./assets/Orbi..svg";

function App() {
  let perct1 = 45;
  let color1 = "#D0DFDE";
  let perct2 = 63;
  let color2 = "#A8AEA7";
  let perct3 = 85;
  let color3 = "#67675E";
  return (
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=K2D:wght@400;500;600;700;800&display=swap');
        </style>
      </head>
<body>
  <header className = "logo">
    <img src = {logo} alt = "orbi logo"/>
  </header>
    <div className="rings">
      <Ring radius="4" width="3.5" color={color1} perct={perct1}/>
      <Ring radius="8" width="3.5" color={color2} perct={perct2}/>
      <Ring radius="12" width="3.5" color={color3} perct={perct3}/>
    </div>
    <div className="rects">
      <Rect hours="2.5" title="Work" color={color3}/>
      <Rect hours="3.2" title="Social" color={color2}/>
      <Rect hours="0.1" title="Media" color={color1}/>
    </div>
    {/* This is the <span class="special-text">TML</span> body of the addon. */}
</body>
</html>
  );
}

function Ring(props) {
  let radius = Number(props.radius);
  let width = Number(props.width);
  let perct = Number(props.perct);
  let color = props.color;
  return (
  <svg viewBox="0 0 36 36" className="circular-chart">
    
    <path 
      d={"M18 " + (18-(radius+width)) +
        " a " + String(radius) + " " + String(radius) + " 0 0 1 0 " + String(radius*2) +
        " a " + String(radius) +  " " + String(radius) + " 0 0 1 0 " + String(-radius*2)}
      fill="none"
      stroke={color + "46"}
      stroke-width={String(width)}
      stroke-dasharray={String(3.1415*radius*2) + ", " + String(3.1415*radius*2)}
    />
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
function Rect(props) {
  let hours = props.hours;
  let title = props.title;
  let colorR = props.color;
  return (<div className="box" style={{background: colorR}}>
    <h3 >{title}</h3>
    <h1>{hours}</h1>
  </div>)
}

export default App;