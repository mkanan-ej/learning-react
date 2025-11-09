import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} />
        ))}

        {/* 
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
                    /> */}
      </ul>
    </section>
  );
}
