import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Template from './components/Template';
import './components/Template.css'
import Modi from './images/modi.jpg'
import Rahul from './images/rahul.jpg'
import Dhoni from './images/dhoni.jpg'
import kohli from './images/kohli.jpg'
import call from './images/calling.jpg'
import mail from './images/mail.png'
import data from './components/data'


function App() {

  const dataa=data.map(item=>{
    return <Card 
    key={item.id}
    {...item}
    />
  })

  return (
    <div className="App">
            <NavBar />
            <Hero />
            {dataa}
    </div>
  );
}

export default App;
