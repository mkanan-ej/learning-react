import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            <CoreConcepts 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} 
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image} 
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} 
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} 
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
