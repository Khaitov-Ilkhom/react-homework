import './App.css';
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards"
import Section from "./components/section/Section"
import Articles from "./components/articles/Articles";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Hero/>
        <Cards/>
        <Section/>
        <Articles/>
    </div>
  );
}

export default App;
