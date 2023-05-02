import React from "react";

const Blog = () => {
  return (
    <div className="my-container lg:h-screen">
      <div className="my-8">
        <h1 className="text-3xl font-bold italic text-gray-600 text-center mb-10">
          React & Node related blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-2">
              Uncontrolled vs Controlled Components
            </h2>
            <p>
              Uncontrolled components in React are form elements whose values
              are managed by the DOM. Controlled components, on the other hand,
              have their values managed by React state. The key difference is
              that with uncontrolled components, the user input is directly
              reflected in the DOM, whereas with controlled components, the
              state must be updated with the new value, which then updates the
              DOM.
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-2">
              Validating React Props with PropTypes
            </h2>
            <p>
              PropTypes is a built-in library in React that allows you to
              validate the types of your component props. You can use PropTypes
              to ensure that the props passed to your component are of the
              correct type, or to provide default values for props that aren't
              required. This can help catch errors early on and make your code
              more robust and maintainable.
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-2">Node.js vs Express.js</h2>
            <p>
              Node.js is a runtime environment for executing JavaScript code on
              the server-side. It allows you to build scalable and fast
              applications using JavaScript. Express.js is a framework built on
              top of Node.js that provides a simple and easy-to-use interface
              for building web applications. It provides a set of features for
              handling HTTP requests and responses, routing, and middleware that
              makes it easy to build complex applications.
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-2">Custom Hooks in React</h2>
            <p>
              A custom hook is a function that allows you to reuse stateful
              logic across multiple components in a React application. Custom
              hooks are useful for abstracting complex logic into reusable,
              easy-to-understand functions. For example, you might create a
              custom hook to handle form validation, or to fetch data from an
              API. Custom hooks are created using the useState and useEffect
              hooks, and can be used just like any other hook in React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
