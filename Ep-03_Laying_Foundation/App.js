import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));   

// React Element - not readable, not developer friendly
// React.createElement => ReactElement-JS Object => HTMLElement(render)
const parent = React.createElement(
    "h1", 
    { id: "heading" },
    "Namaste React parent"
);

// JSX - is not HTML is JavaScript - looks like HTML or XML like
const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX</h1>  
// This is not a pure JavaScript, but here parcel is making it work
// JSX takes care of injection attacks by sanitizing

// JS engine understands ES6/ECMAScript6 and not JSX
// JSX is transpiled before it reaches the JS engine (done by Parcel through Babel)
// Babel is a JavaScript compiler - converts or transpiles JSX code to JavaScript code
// Babel converts to createElement and then to HTMLElement
// tag syntax is different in JSX. It's deifferent from HTML
// class => className (attributes are written in camel case)
// JSX is wrapped inside () for multi-lines

const Title = function () {
    return <h1 id="heading" className="head" tabIndex="1">
        Namaste React using JSX
    </h1>
};

// React Component - Class based(Old) and Functional based(New)

// React Functional Component - always name it with Capital
// A function which returns JSX(React element)
// returns JSX
const HeadingComponent = () => {
    return <h1>React Functional Component!</h1>
};

root.render(HeadingComponent());
root.render(<HeadingComponent />);  // render the component

const number = 100;
// Component Composition => Component inside Component
const TileInsideHeadingComponent = () => (
    <div id="container">
        { number } 
        <h1>{ console.log("Hello") } { 575 }</h1>
        { parent }
        <Title />
        <Title></Title>
        { Title() }
        <h1>React Functional Component!</h1>
    </div>
);
// You can inject any JavaScript expression inside {}
root.render(<TileInsideHeadingComponent />);  // render the component


