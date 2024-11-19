import React from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`
      
    };
    
  }
  
  
  
  render(){
    const markdownHtml = marked(this.state.markdown);
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    var outputStyle = {
      backgroundColor: "#DCDCDC",
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    
    return (
      <div className="App">
        <div className="container" >
          <div className="row mt-4" >
            <div className="col text-center" >
              <h1>
                <Badge className="text-align-center" variant="light">Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div> 
          <div className="row mt-4" >
            
            <div className="col md-6" >
             <div className="col text-center">
               <h1>
                  <Badge className="text-align-center" variant="secondary">Editor
                  </Badge>
               </h1>
               <div className="mark-input" style={inputStyle}>
                 <textarea id="editor" className="editor" style={inputStyle} value={this.state.markdown} onChange={(e) => this.setState({markdown: e.target.value})} ></textarea>
               </div>
              </div>
              
            </div>
            <div className="col md-6" >
             <div className="col text-center" >
               <h1>
                  <Badge className="text-align-center" variant="secondary">Previewer
                  
                  </Badge>
               </h1>
               
               <div id="preview" className="preview" style={outputStyle} dangerouslySetInnerHTML={{ __html: markdownHtml}}></div> 
               
              </div>
              
            </div>
            
          </div> 
        </div>
        

      </div> 
      
    ) 
  }
}