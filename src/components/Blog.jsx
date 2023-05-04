import React from "react";

import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="container mx-auto bg-orange-100 p-8">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn btn-primary">
            Download as PDF
          </button>
        )}
      </Pdf>

      <div ref={ref}>
        <h1 className="text-3xl font-semibold my-6">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <p>
          In React, a controlled component is a form element whose value is
          controlled by React through its state. This means that the component's
          value is always in sync with the component's state. When the user
          interacts with the component, React updates the state and re-renders
          the component with the new value. The state is then passed down to the
          component as a prop, and the component updates its value accordingly.
          Controlled components are typically used in forms where you need to
          have precise control over the user's input. On the other hand, an
          uncontrolled component is a form element whose value is not controlled
          by React, but rather by the browser's DOM. In other words, the value
          of the component is not stored in the component's state, but rather in
          the DOM. When the user interacts with the component, the value is
          updated directly in the DOM, and the component is not re-rendered.
          Uncontrolled components are typically used in simple forms where you
          don't need to have precise control over the user's input.
        </p>
        <h1 className="text-3xl font-semibold my-6">
          2. How to validate React props using PropTypes?
        </h1>
        <p>
          React provides a library called prop-types which allows you to define
          the types of props that a component should receive. This can help
          catch errors early and ensure that the correct types of data are being
          passed down to the component. Here's an example of how to use
          prop-types:
          <br></br>
          1. First, install the prop-types package by running the following
          command: npm install prop-types <br></br>
          2. Import PropTypes at the top of your component file: javascript
          <br></br>
          import PropTypes from 'prop-types'; <br></br>
          3. Add a propTypes object to your component, defining the type for
          each prop:
        </p>
        <h1 className="text-3xl font-semibold my-6">
          3. Tell us the difference between nodejs and express js.
        </h1>
        <p>
          Node.js is a JavaScript runtime built on the V8 JavaScript engine that
          allows developers to run JavaScript code outside of a web browser. It
          provides a runtime environment for building scalable network
          applications. Node.js includes features such as a non-blocking I/O
          model, event-driven architecture, and a powerful module system that
          enables developers to write server-side applications in JavaScript.
          <br></br>
          Express.js is a web application framework for Node.js. It provides a
          set of features for building web applications such as routing,
          middleware, and template engines. Express.js simplifies the process of
          building web applications by providing a higher-level API on top of
          Node.js's core functionality. It allows developers to write
          server-side applications using an intuitive and flexible API.
          <br></br>
          In summary, Node.js is a JavaScript runtime that provides a runtime
          environment for building server-side applications, while Express.js is
          a web application framework that simplifies the process of building
          web applications using Node.js. Express.js is built on top of Node.js
          and provides a higher-level API for building web applications.
        </p>
        <h1 className="text-3xl font-semibold my-6">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <p>
          In React, a custom hook is a reusable function that allows you to
          share logic between components. Custom hooks are created using the
          useEffect and useState hooks, or any other hooks, and are prefixed
          with the word use.
          <br></br> Custom hooks can be used to abstract away repetitive logic
          in your components, making them more readable and maintainable. They
          also enable you to share stateful logic between components that do not
          share a common parent, which can be difficult to achieve with other
          forms of state management. <br></br>
          Custom hooks can be used to encapsulate complex behavior such as
          handling browser events, fetching data from APIs, or managing state in
          your application. By creating a custom hook, you can extract this
          logic from your components, making them more focused on their specific
          responsibilities. <br></br>
          For example, you may create a custom hook to handle form validation
          logic that can be reused across multiple forms in your application.
          This can help reduce the amount of repetitive code in your components
          and improve the overall organization of your codebase.
        </p>
      </div>
    </div>
  );
};

export default Blog;
