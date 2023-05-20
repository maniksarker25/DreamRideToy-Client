const Blog = () => {
  return (
    <>
      <div>
        <h1 className="my-12  text-center font-bold text-4xl">
          Some Important Questions And Answers
        </h1>
        <div className="grid lg:grid-cols-2 gap-4 ps-8 lg:ps-0">
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h2 className="text-3xl font-bold">
              1. When should you use context API?
            </h2>
            <p className="mt-6 text-xl">
              Context API in React is a tool that allows you to share data
              across components without having to pass props down manually at
              every level. It can be useful in situations where you have data or
              settings that are needed by many components in different parts of
              your application.
            </p>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h1 className="text-3xl font-bold">2. What is a custom hook?</h1>
            <p className="text-xl mt-6">
              In React, a custom hook is a function that uses one or more of the
              existing React hooks (such as useState or useEffect) to create a
              new hook with a specific behavior that can be reused across
              multiple components. By abstracting away common logic or state
              management into a custom hook, developers can reduce the amount of
              code duplication in their applications and make their code more
              modular and reusable.
            </p>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h1 className="text-3xl font-bold">3. What is useRef?</h1>
            <p className="text-xl mt-6">
              useRef is a hook in React, a JavaScript library for building user
              interfaces, that provides a way to create a mutable reference that
              can persist across re-renders of a component. The useRef hook
              takes an initial value and returns an object with a current
              property that initially holds the provided value. This current
              property can be updated throughout the lifecycle of the component
              using the useRef hook's current property.
            </p>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-4">
            <h1 className="text-3xl font-bold">4.What is useMemo?</h1>
            <p className="text-xl mt-6">
              React has a built-in hook called useMemo that allows you to
              memoize expensive functions so that you can avoid calling them on
              every render. You simple pass in a function and an array of inputs
              and useMemo will only recompute the memoized value when one of the
              inputs has changed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
