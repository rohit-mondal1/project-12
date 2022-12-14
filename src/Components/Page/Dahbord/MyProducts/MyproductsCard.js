import React from "react";
import toast from "react-hot-toast";
import { FcAdvertising } from "react-icons/fc";

const MyproductsCard = ({ all, handeldelet }) => {
  const { name, date, image, _id } = all;

  const handeladd = (id) => {
    fetch(`https://mobil-sarver-rahul-sarker18.vercel.app/advertise/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Add advertise !!!");
        }
      });
  };

  return (
    <div className="flex flex-col   border-b-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <ul className="flex flex-col divide-y divide-gray-700">
        <li className="flex flex-col  sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
              src={image}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    <span className="font-bold text-green-600">
                      Product Name :{" "}
                    </span>{" "}
                    {name}
                  </h3>
                  <p className="text-sm dark:text-gray-400">
                    <span className="font-bold">Date : </span>
                    {date}
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  onClick={() => handeldelet(_id)}
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>

                <button
                  onClick={() => handeladd(_id)}
                  type="button"
                  className="flex items-center px-2 py-1 space-x-1"
                >
                  <FcAdvertising className="text-xl" />
                  <span>Add advertise</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyproductsCard;
