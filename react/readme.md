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

