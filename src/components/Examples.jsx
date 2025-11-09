import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
export default function Examples(){
    const [selected, setselected] = useState();
    function clicked(type){
        setselected(type);
    };
    return(
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

    );
}