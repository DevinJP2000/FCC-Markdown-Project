import React, {useState} from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";
//Importing markdown doesn't work.

function App() {
   
  const [markdown, setMarkdown] = useState("# This is a markdown previewer! \n## This will display live results of different markdown notations.\n### Theres lots of cool stuff you can do with markdown notation! Like these headings!\n For emphasis, you can add **bold** text for importance.\nOr _italic text_ for extra emphasis.\nIf you really want to emphasize, you can use **_both_**\nFor 'forbidden' knowledge, you can ~~cross it out~~\n\nYou can [link external websites](https://www.freecodecamp.org).\n>Block quotes are also here, just saying. \n\n- You can do unordered indented lists.\n  - Tabs move them up a level.\n    - They all have different appearences.\n      - Okay thats enough levels.\n\n\n1. Ordered lists are done with numbers.\n1. But they don't count up on the raw text.\n1. Just a notation.\n\n`<p>You can add code to the page</p>`\n\n```\n//This is multi-line code.\nfunction countMarkdownLength(markdown) {\nlet marklength = 0 \n\nfor(let i = 0 ; i < markdown.length < i++) {\n   marklength++\n  }\n}\n```\n\nYou can add images! I like this picture of a wolf, but you can add your own.\n![Cool Wolf art](https://cdn.pixabay.com/photo/2020/07/10/02/45/tattoo-5389284_960_720.png)");
  
  marked.setOptions({
    breaks: true
  })
  
  function updateMarkdown(newMarkdown) {
    setMarkdown(newMarkdown)
  }
  
  return (
    <div id="App">
      <div id="markdown-div">
        <div id="markdown-header">
          <h3>Editor</h3>
        </div>
        <div id="markdown-textarea">
          <textarea id="editor" value={markdown} onChange={(newMarkdown) => updateMarkdown(newMarkdown.target.value)}></textarea>
        </div>
      </div>
      <div id="preview-div">
        <div id="preview-header">
          <h3>Preview</h3>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('main'));
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 