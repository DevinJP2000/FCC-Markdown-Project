import React, { useState } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";
//Importing markdown doesn't work.

function App() {

  const [markdown, setMarkdown] = useState("# This is a markdown previewer! \n## This will display live results of different markdown notations.\n### Theres lots of cool stuff you can do with markdown notation! Like these headings!\n For emphasis, you can add **bold** text for importance.\nOr _italic text_ for extra emphasis.\nIf you really want to emphasize, you can use **_both_**\nFor 'forbidden' knowledge, you can ~~cross it out~~\n\nYou can [link external websites](https://www.freecodecamp.org).\n>Block quotes are also here, just saying. \n\n- You can do unordered indented lists.\n  - Tabs move them up a level.\n    - They all have different appearences.\n      - Okay thats enough levels.\n\n\n1. Ordered lists are done with numbers.\n1. But they don't count up on the raw text.\n1. Just a notation.\n\n`<p>You can add code to the page</p>`\n\n```\n//This is multi-line code.\nfunction countMarkdownLength(markdown) {\nlet marklength = 0 \n\nfor(let i = 0 ; i < markdown.length < i++) {\n   marklength++\n  }\n}\n```\n\nYou can add images! I like this picture of a wolf, but you can add your own.\n![Cool Wolf art](https://cdn.pixabay.com/photo/2020/07/10/02/45/tattoo-5389284_960_720.png)");

  marked.setOptions({
    breaks: true });


  function updateMarkdown(newMarkdown) {
    setMarkdown(newMarkdown);
  }

  return /*#__PURE__*/(
    React.createElement("div", { id: "App" }, /*#__PURE__*/
    React.createElement("div", { id: "markdown-div" }, /*#__PURE__*/
    React.createElement("div", { id: "markdown-header" }, /*#__PURE__*/
    React.createElement("h3", null, "Editor")), /*#__PURE__*/

    React.createElement("div", { id: "markdown-textarea" }, /*#__PURE__*/
    React.createElement("textarea", { id: "editor", value: markdown, onChange: newMarkdown => updateMarkdown(newMarkdown.target.value) }))), /*#__PURE__*/


    React.createElement("div", { id: "preview-div" }, /*#__PURE__*/
    React.createElement("div", { id: "preview-header" }, /*#__PURE__*/
    React.createElement("h3", null, "Preview")), /*#__PURE__*/

    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(markdown) } }))));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('main'));
