- [Welcome to react babe](#welcome-to-react-babe)
  - [Ben awad practical react tutorial](#ben-awad-practical-react-tutorial)
    - [passing data between component](#passing-data-between-component)
    - [creating a counter app (how state work?)](#creating-a-counter-app-how-state-work)
    - [creating an image slider (how state works?)](#creating-an-image-slider-how-state-works)
    - [working with forms](#working-with-forms)
    - [how to fetch an api](#how-to-fetch-an-api)

# Welcome to react babe

## Ben awad practical react tutorial

### passing data between component

* we are going to create an App component and 2 components: Header and Body and pass data from App to Header and Body.

* Create an App component:

    ```js
    import React, { Component } from "react"
    import "./App.css"
    import Body from "./Body"
    import Header from "./Header"

    class App extends Component {
        render() {
            return (
                <div>
                    <div style={{ marginBottom: 10 }}>
                        <Header title="this is a title from App component" />
                    </div>

                    <div>
                        <Body
                            number={17}
                            text={"this is a text"}
                            array={[1, 2, 3]}
                            obj={{ name: "alae", email: "alae2ba@gmail.com" }}
                            func={(a, b) => a + b}
                        />
                    </div>
                </div>
            )
        }
    }

    export default App

    ```

    * To the Header component we are passing just one prop: title
    * To the Body component we are passing 5 props.

* Create the Header component
    
    ```js
    import React, { Component } from "react"

    export default class Header extends Component {
        render() {
            return <div> {this.props.title} </div>
        }
    }
    ```

    we are accessing the title prop using: **this.props.title**

* create the Body component: 

    ```js
    import React, { Component } from "react"

    export default class Body extends Component {
        render() {
            return (
                <div>
                    number: {this.props.number} <br />
                    text: {this.props.text} <br />
                    array: {JSON.stringify(this.props.array)} <br />
                    name: {this.props.obj.name} <br />
                    email: {this.props.obj.email} <br />
                    func: {this.props.func(1, 2)}
                </div>
            )
        }
    }

    ```

* here the result.  
    
    ![img](./imgs/1.png)


### creating a counter app (how state work?)

* Create an app component

    ```js
    import React, { Component } from "react"
    import "./App.css"
    import Counter from "./Counter"

    class App extends Component {
        render() {
            return (
                <div>
                    <Counter />
                </div>
            )
        }
    }

    export default App
    ```

    the app component just renders a Counter comonent

* create a Counter component

    ```js
    import React, { Component } from "react"

    export default class Counter extends Component {
        state = {
            count: 0
        }

        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        decrement = () => {
            this.setState({
                count: this.state.count - 1
            })
        }

        render() {
            return (
                <div>
                    <div>
                        {" "}
                        <h1>count: {this.state.count}</h1>{" "}
                    </div>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.increment}>increment</button>
                </div>
            )
        }
    }
    ```

    * see how i change the **count** variable in the state. Im calling a method named **setState** and im passing to it a new object with the **count** state var now modified. but alae this is going to change the whole state no??? no, just the **count** var, which means if we have other vars in the **state** object they will not change!

    * see how im handling the **click event** on the buttons

* here what it looks like

    ![img](./imgs/2.png)


### creating an image slider (how state works?)

* create an App component
    
    ```js
    import React, { Component } from "react"
    import "./App.css"
    import ImageSlider from "./ImageSlider"

    class App extends Component {
        render() {
            return (
                <div>
                    <ImageSlider />
                </div>
            )
        }
    }

    export default App
    ```

* create an ImageSliderComponent
    
    ```js
    import React, { Component } from "react"

    //there is a bug with % in js, this is the right implementation
    Number.prototype.mod = function (n) {
        return ((this % n) + n) % n
    }

    export default class ImageSlider extends Component {
        state = {
            images: [
                "https://i.pinimg.com/originals/eb/92/b9/eb92b94f2565096ade8e9ff644952c66.jpg",
                "https://i.pinimg.com/236x/9a/74/c0/9a74c0a33095581cdcc23ad6b27860f2.jpg",
                "https://i.pinimg.com/236x/8f/1a/5e/8f1a5eaabe8af040631d259c2a6d1275.jpg"
            ],
            index: 0
        }

        handleNext = () => {
            this.setState({
                index: (this.state.index + 1).mod(this.state.images.length)
            })
        }

        handlePrevious = () => {
            this.setState({
                index: (this.state.index - 1).mod(this.state.images.length)
            })
        }

        render() {
            return (
                <div>
                    <img src={this.state.images[this.state.index]} alt="img" style={{ width: 100, height: 100 }} /> <br />
                    <button onClick={this.handlePrevious}>previous</button>
                    <button onClick={this.handleNext}>next</button>
                </div>
            )
        }
    }
    ```

    when i click the **next button** im calling **handleNext** method.\
    notice how im changin the **state** with **setState**. Im passing an object to it but **images** is not changed in the **state object :)**


* here is how it looks like:

    ![img](./imgs/3.png)

### working with forms

* create an App component:
    
    ```js
    import React, { Component } from "react"
    import "./App.css"

    class App extends Component {
        state = {
            name: "",
            checked: true,
            title: "Miss."
        }

        handleInput = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        handleCheck = (event) => {
            // this.setState({ checked: !this.state.checked })
            this.setState({
                checked: event.target.checked
            })
        }

        handleSelect = (event) => {
            this.setState({
                title: event.target.value
            })
        }

        handleSubmit = (event) => {
            event.preventDefault()
            console.log(this.state)
        }

        render() {
            const formStyle = { border: "1px solid black", padding: "10px", width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "20px" }

            return (
                <div>
                    <form onSubmit={this.handleSubmit} style={formStyle}>
                        <div>
                            your name: <br />
                            <input type="text" value={this.state.name} onChange={this.handleInput} /> <br />
                            name: {this.state.name} <br />
                        </div>

                        <div>
                            <input type="checkbox" onChange={this.handleCheck} checked={this.state.checked} /> <br />
                            checked? {String(this.state.checked)}
                        </div>

                        <div>
                            <select value={this.state.title} onChange={this.handleSelect}>
                                <option>Mr.</option>
                                <option>Miss.</option>
                                <option>Mme.</option>
                            </select>
                            <br />
                            title: {this.state.title}
                        </div>

                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            )
        }
    }

    export default App
    ```

    for every change in the input field, a method named **handleInput** gets called and it changes the value of **name** in the **state** and Im taking this value (this.state.name) and Im rendering it in the view.

    for other input we have other events.

### how to fetch an api

in react we fetch an api using the **fetch API** built in into Js.

when we are working with a class component like here we fetch the data when the component renders which means in the **componentDidMount** method.

* create an App component

    ```js
    import React, { Component } from "react"
    import "./App.css"

    class App extends Component {
        state = {
            loading: true,
            user: null
        }

        async componentDidMount() {
            const url = "https://jsonplaceholder.typicode.com/users/1"

            try {
                const response = await fetch(url)
                const json = await response.json()
                this.setState({
                    loading: false,
                    user: json
                })
            } catch (error) {
                console.error(error)
            }
        }

        displayUser() {
            return (
                <div>
                    name: {this.state.user.name} <br />
                    mail: {this.state.user.email} <br />
                    website: {this.state.user.website} <br />
                    phone: {this.state.user.website}
                </div>
            )
        }
        render() {
            return <div>{this.state.loading || !this.state.user ? <div> loading... </div> : this.displayUser()} </div>
        }
    }

    export default App
    ```

* here is how it looks like when the data is fetched.

    ![](./imgs/4.png)
