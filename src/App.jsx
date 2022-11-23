import React from "react";
import Review from "./components/Review";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <section className="px-5 sm:px-8 flex justify-center items-center min-h-screen">
        <div>
          <h1 className="text-center text-2xl sm:text-4xl font-bold text-white mb-10">
            Our Reviews
          </h1>
          <Review />
        </div>
      </section>
    </div>
  );
}

export default App;
