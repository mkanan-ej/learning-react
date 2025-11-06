import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selected, setselected] = useState();
  function clicked(type){
    setselected(type);


  };
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clicked('components')}>Components</TabButton>
            <TabButton onSelect={() => clicked('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => clicked('props')}>Props</TabButton>
            <TabButton onSelect={() => clicked('state')}>states</TabButton>

          </menu>
          {!selected ? <p> please select a topic</p> :  <div id="tab-content">
          <h3>{EXAMPLES[selected].title}</h3>
          <p>{EXAMPLES[selected].description}</p>
          <pre>
            <code>
              {EXAMPLES[selected].code}
            </code>
          </pre>
          </div>}

        </section>
      </main>
    </div>
  );
}

export default App;
