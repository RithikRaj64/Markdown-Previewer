import React, { useState } from 'react';
import { marked } from "marked";
import "@fontsource/quicksand"
import "@fontsource/satisfy"

function App() {

  const [input, setInput] = useState(sample_text);
  const [output, setOutput] = useState("");

  const generate = () => {
    setOutput(marked(input));
  }

  const update = (event) => {
    setOutput(marked(event.target.value));
    setInput(event.target.value);
  }

  return (
    <div >
      <h1 style={{ textAlign: 'center', fontFamily: "Satisfy" }} className="title">Markdown Previewer</h1>
      <textarea style={{ fontFamily: "Quicksand" }} className="input" onChange={update} value={input} placeholder="Enter your markdown here" />

      {
        (output == "") ?

          <center onMouseOver={generate} onTouchStart={generate}><p>Touch me...🤫</p></center> :

          <div className="output"
            dangerouslySetInnerHTML={{
              __html: output,
            }}
          ></div>
      }

    </div>
  );

}

const sample_text = `# Howdy

## Rithik here 😎

[GitHub Repo containing this project](https://github.com/RithikRaj64/Markdown-Previewer)

[Project has been deployed in this link](https://rithikraj64.github.io/Markdown-Previewer)

\`You can insert an Inline Code\`

    Or you can go crazy and have a whole Code Block

- You can create an Unordered list like this....

1) Or if you are well organized like me use these Ordered lists...

>A great man once said live life fearless and bold

**And that's why I made this line Bold**`;

export default App;