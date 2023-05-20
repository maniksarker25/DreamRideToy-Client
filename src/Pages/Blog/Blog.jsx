import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <>
      <div>
        <h1 className="my-12  text-center font-bold text-4xl">
          Some Important Questions And Answers
        </h1>
        <div className="grid lg:grid-cols-2 gap-4 ps-8 lg:ps-0">
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h2 className="text-2xl font-bold">
              1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>
            <p className="mt-6 ">
            The access token provides temporary access to protected resources, while the refresh token is used to obtain a new access token when the original token expires.
            <br /> 
            <br />
            <span className="font-semibold">Access Token:</span> The client application includes the access token in the headers or requests to the protected resources (APIs, web services, etc.) to prove the user's identity and authorization level. The server verifies the access token to grant access to the requested resources. Access tokens are typically short-lived, with an expiration time, and need to be periodically refreshed.
            <br />
            <span className="font-semibold">Refresh Token</span> If the access token expires or becomes invalid, the client can use the refresh token to request a new access token without requiring the user to reauthenticate. The client sends the refresh token to the server, which verifies it and issues a new access token in return. Refresh tokens are long-lived and securely stored by the client.
            </p>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h1 className="text-2xl font-bold">2.Compare SQL and NoSQL databases?</h1>
            <p className=" mt-6">
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database systems that have distinct characteristics. Here are  a comparison between SQL and NoSQL databases:
            <br />
            <span className="font-semibold">SQL Databases:</span>SQL databases are based on a rigid, predefined schema that defines the structure of the data. They enforce data integrity rules, such as data types, constraints, and relationships between tables.SQL databases use a relational model, where data is organized into tables with rows and columns. Relationships between tables are established using primary and foreign keys. <br />
            <span className="font-semibold">NoSQL Databases:</span>NoSQL databases offer flexible schema designs, allowing for dynamic and unstructured data. They do not enforce a fixed schema, enabling easy modification and addition of fields.NoSQL databases support various data models, including key-value, document, columnar, and graph. Each model is optimized for specific use cases and data structures.
            </p>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h1 className="text-2xl font-bold">3.What is express js? What is Nest JS?</h1>
            <p className=" mt-6">
             <span className="font-semibold">Express.js:</span>Express.js is a popular and widely used web application framework for Node.js. It provides a minimalistic, unopinionated approach to building web applications and APIs. Express.js simplifies the process of creating server-side applications by offering a range of features and middleware that help with routing, handling HTTP requests and responses, managing sessions, and more. <br />
             <span className="font-semibold">NestJS:</span>NestJS is a progressive, TypeScript-based web application framework for building efficient and scalable server-side applications. It is heavily inspired by Angular, leveraging concepts such as decorators, dependency injection, and module-based architecture. NestJS aims to provide a structured and opinionated framework for building server-side applications with a focus on modularity and maintainability. It offers features like built-in support for TypeScript, powerful dependency injection system, declarative HTTP module, middleware support, WebSocket integration, and more.
            </p>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h1 className="text-2xl font-bold">4.What is MongoDB aggregate and how does it work?</h1>
            <p className="text-xl mt-6">
            In MongoDB, the aggregate operation is used for performing advanced data processing and analysis on the collections within the database. It allows you to process and transform data, perform calculations, and apply various operations to retrieve aggregated results.
            <br />
            The aggregate operation works on the concept of a pipeline. The pipeline consists of multiple stages, and each stage performs a specific operation on the documents as they pass through the pipeline. Here is an overview of how the MongoDB aggregate operation works:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
