import "./app.css";
import Header from "./components/Header/Header";
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainImg">
        <img src="/images/bgImg.png" alt="" />
      </div>
      <section className="content">
        <h1>Essential Mobile App Landing for Workspaces</h1>
        <br />
        <p>
          A mobile app landing page is important and essential for right amount
          of information <br />
          about yourproduct. Start increasing your user base upon the launch of
          your product
        </p>
        <br />
        <br />
        <button className="exploreBtn">Explore Demos -&gt; </button>
      </section>
      <Carousel />
    </div>
  );
}

export default App;
