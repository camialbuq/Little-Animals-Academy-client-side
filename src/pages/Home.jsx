import React from "react";
import Modal from "react-modal";
import { useState } from "react";

function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Quisquam necessita vel
          <span className="dark:text-violet-600">laborum doloribus</span>
          delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button
            onClick={() => setVisible(true)}
            className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Get started
          </button>
          <Modal
            isOpen={visible}
            onRequestClose={() => setVisible(false)}
            ariaHideApp={false}
            className="fixed inset-2 flex items-center justify-center"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 cursor-pointer z-50"
          >
            <div className="flex relative justify-center items-center w-1/2 h-1/2 p-4 bg-blue-500 border border-gray-300 rounded-lg outline-none overflow-auto">
              <div className="w-5/6 py-6 justify-center items-center">
                <h1 className="text-2xl text-white z-50 mb-6 text-center">
                  Sign up to start playing!
                </h1>
                <form
                  noValidate=""
                  action=""
                  className="self-stretch space-y-4 w-full text-center"
                >
                  <div>
                    <label htmlFor="name" className="text-base sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md  py-2 px-4 focus:ring focus:dark:ring-indigo-600 dark:border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="text-sm sr-only">
                      Email address
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Email address"
                      className="w-full rounded-md py-2 px-4 focus:ring focus:dark:ring-indigo-600 dark:border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="playername" className="text-sm sr-only">
                      Player's name
                    </label>
                    <input
                      id="playername"
                      type="text"
                      placeholder="Player's' name to join animal academy"
                      className="w-full mb-4 py-2 px-4 rounded-md focus:ring focus:dark:ring-indigo-600 dark:border-gray-300"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-1/2 py-4 mb-10 text-xl font-semibold rounded dark:bg-indigo-600 dark:text-gray-50"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default Home;
