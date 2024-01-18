## Creating and nesting components 
- React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
- React component names must always start with a capital letter, while HTML tags must be lowercase.
- The export default keywords specify the main component in the file.

## Writing markup with JSX
- JSX is stricter than HTML. 
- You have to close tags like <br />. 
- Your component also can’t return multiple JSX tags. 
- You have to wrap them into a shared parent, like a **<div>...</div>** or an empty <>...</> wrapper

## Adding styles
- Specify a CSS class with className.
- <img className="avatar" />

## Displaying data
- JSX lets you put markup into JavaScript. 
- **Curly braces {}** let you “escape back” into JavaScript so that you can embed some variable from your code.
- Ex. 
- <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of ' + user.name}
    style={{
        width: user.imageSize,
        height: user.imageSize
    }}
   />
- In the above example, style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces.

## Rendering lists
- const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
    );

    return (
    <ul>{listItems}</ul>
    );
- For each item in a list, you should pass a string or a number (**key**) that uniquely identifies that item among its siblings. 
- Usually, a key should be coming from your data, such as a database ID. 
- React uses your keys to know what happened if you later insert, delete, or reorder the items.

## Responding to events
    function MyButton() {
        function handleClick() {
            alert('You clicked me!');
        }

        return (
            <button onClick={handleClick}>
                Click me
            </button>
        );
    }
- onClick={handleClick} has **no parentheses** at the end! 
- Do not call the event handler function: you only need to pass it down.