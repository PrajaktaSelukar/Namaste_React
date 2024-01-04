const heading = React.createElement(
    "h1", 
    { id: "heading", abc: "xyz" },         // attribute values
    "Hello World from React"   // children
);

console.log(heading);   // returns object not HTML h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));   

root.render(heading);

// Nested react element structure using third argument
/*
* <div id="parent"> 
*   <div id="child">
*       <h1>This is h1 tag </h1>
*   </div>
*  </div>
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "This is h1 tag"
        )
    )
);

root.render(parent);

// Create sibling structure
/*
* <div id="parent"> 
*   <div id="child">
*       <h1>This is h1 tag </h1>
*       <h2>This is h2 tag </h2>
*   </div>
*  </div>
*/

const parent_sec = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "This is h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "This is h2 tag"
        )
    )
);

root.render(parent_sec);

// More complex structure
// Create sibling structure
/*
* <div id="parent"> 
*   <div id="child">
*       <h1>This is h1 tag </h1>
*       <h2>This is h2 tag </h2>
*   </div>
*   <div id="child2">
*       <h1>This is h1 tag </h1>
*       <h2>This is h2 tag </h2>
*   </div>
*  </div>
*/

const parent_third = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement(
            "h1",
            {},
            "This is h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "This is h2 tag"
        )
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement(
            "h1",
            {},
            "This is h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "This is h2 tag"
        )
    ])
]);

root.render(parent_third);
