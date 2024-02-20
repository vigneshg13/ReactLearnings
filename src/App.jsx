import { useState } from "react";
import compImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept";
import TabButton from "./Components/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedItem, setSelectedItem] = useState();
  function handleSelect(selectItem) {
    //console.log(selectedItem + " got selected");
    setSelectedItem(selectItem);
    console.log(selectedItem);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedItem !== undefined) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedItem].title}</h3>
        <p>{EXAMPLES[selectedItem].description}</p>
        <pre>
          <code>{EXAMPLES[selectedItem].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedItem === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedItem === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedItem === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedItem === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* Approach 1 for conditional displaying  */}
          {/* {!selectedItem && <p>Please select a topic</p>}
          {selectedItem && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedItem].title}</h3>
              <p>{EXAMPLES[selectedItem].description}</p>
              <pre>
                <code>{EXAMPLES[selectedItem].code}</code>
              </pre>
            </div>
          )} */}
          {/* Approach 2  */}
          {/* {!selectedItem ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedItem].title}</h3>
              <p>{EXAMPLES[selectedItem].description}</p>
              <pre>
                <code>{EXAMPLES[selectedItem].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
