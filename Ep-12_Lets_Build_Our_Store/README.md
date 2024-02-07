## Important Resources:

- [Read More about Zustand](https://github.com/pmndrs/zustand)
- [Read More about Redux-Toolkit](https://redux-toolkit.js.org/)
- [Read more about Immer JS library](https://immerjs.github.io/immer/)
- [Different ways to add event handlers](https://react.dev/learn/responding-to-events#adding-event-handlers)
- [Read about RTK-Query](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)

# Notes(Redux Toolkit)
- Step 1: Install @reduxjs/toolkit and react-redux libraries
- Step 2: Build our own store.
- Step 3: Connect the store to our app(make the bridge)
- Step 4: Create Cart slice
- Step 5: Dispatch action
- Step 6: To read data Use selector to subscribe to the CartSlice

### Redux
- Redux is a predictable state container for JavaScript apps.
- Redux is not Mandatory, use when there is lot of data transfer between the components.
- Redux and React are different libraries.

- **Zustand** is another alternate library for state management.
- **Redux Toolkit** is a newer way of writing Redux. 
- The Redux Toolkit(RTK) package is intended to be the standard way to write Redux logic.

### Drawbacks of Redux -
- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code".

### Redux Store
- Redux Store is a big whole object and it's kept in a central global space.

- When clicked on Add button it **dispatches an action**, which calls the **Reducer function** and then it modifies **Slice of Redux Store** in the Cart.

- We use a **Selector** to read data from the Store and then Selector modifies the React component. This phenomenon is called **Subscribing to the Store**.

![Redux Store](image.png)

- configureStore, createSlice is provided by @reduxjs/toolkit
- Provider is provided by react-redux.
- Wrap whole app inside <Provider>
- Create a slice for the actions.
- Each slice will have itws own reducer.
- We are mutating the state in the reducer(directly modifying the state).
- Then provide this reducer in the configureStore

1. Created a Store using configureStore ("appStore")
2. Added a big reducer in it. This contains many small reducers like we added cartReducer.
3. This cartReducer comes from cartSlice.
4. We added name, initialState and reducer to the slice.
5. Then export cartSlice's actions and reducer.
6. Then Provide it to the app.
7. Now use Selector Hook to subscribe to the Store.
8. Selector is used for reading and dispatch is used for dispatching the Store.

### Remember
1. When you are using a Selector you are subscribing to the right type of the Store.
- Correct Approach => 
```
const cartItems = useSelector((store) => store.cart.items );
```
- Inefficient Approach => 
```
const store = useSelector((store) => store );
const cartItems = store.cart.items;
```
This is because if you get whole store, then if you do any changes in the big Store whole Cart is rendered unnecessarily.
For ex - if User logs in then Cart doesn't care about that. Try to subscribe to only specific portion of the store.

2. Keywords - reducer and reducers - when to use which one
- When you are creating a **appStore** we use **reducer**. This reducer has multiple small reducers(user, cart).
- But when we writing a **slice** we have multiple small **reducers**.
- While exporting in the slice, we send one whole **reducer**; 

3. Vanilla Redux (older)
- It used to say "Don't mutate the State".
- We used to create copy of the State.
- Returning was kind of mandatory.

4. New Redux
- It has to mutate the state.
- React uses **Immer JS library** internally to immutate the State by comparing the Original state and Immutatble state, find the difference and give the new immutable copy.
- `state = []` is not allowed, so use `state.items.length = 0`, i.e., state = [] because state is a local variable and original state is different.
- To display the State use current
```
 console.log(current(state));
```
- RTK says either mutate the existing state OR return a new state
```return { items: [] }; ``` 
It replaces the state with { items: [] }

- Read about **RTK Query**.

- You can use **Redux DevTool**.