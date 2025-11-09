import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples(){
    const [selected, setselected] = useState();
    function clicked(type){
        setselected(type);
    };
    return(
        <Section title="Example" id="examples">
          <Tabs buttons={
            <>
                <TabButton onClick={() => clicked('components')} id="examples">Components</TabButton>
                <TabButton onClick={() => clicked('jsx')} id="examples">JSX</TabButton>
                <TabButton onClick={() => clicked('props')} id="examples">Props</TabButton>
                <TabButton onClick={() => clicked('state')} id="examples">states</TabButton>
            </>}>

            {!selected ? 
          <p> please select a topic</p> :  
          <div id="tab-content">
          <h3>{EXAMPLES[selected].title}</h3>
          <p>{EXAMPLES[selected].description}</p>
          <pre>
            <code>
              {EXAMPLES[selected].code}
            </code>
          </pre>
          </div>}

          </Tabs>
        </Section>

    );
}