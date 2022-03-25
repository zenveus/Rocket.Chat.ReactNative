import React from "react";

const Modal = ({
  open,
  setOpen,
  updateKaynaConfig,
  kaynaConfig,
  updateWidget,
}) => {
  return (
    <div >
      {open && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-[5%] left-[35%] z-50 md:w-full inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  onClick={() => setOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              >
                <h3 className="text-xl font-medium text-gray-900">
                  Enter Data to Edit Widget
                </h3>
                <div className="flex flex-row  md:flex-col">
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      External Customer ID:
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="External Customer ID"
                      type="text"
                      value={kaynaConfig?.extCustomerID}
                      name="extCustomerID"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Customer Name:
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Customer Name"
                      type="text"
                      value={kaynaConfig?.extCustomerName}
                      name="extCustomerName"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                </div>
                <div className="flex flex-row  md:flex-col">
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Address:
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Address"
                      type="text"
                      value={kaynaConfig?.address}
                      name="address"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Building Area:
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Building Area"
                      type="number"
                      value={kaynaConfig?.buildingArea}
                      name="buildingArea"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                </div>
                <div className="flex flex-row  md:flex-col">
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Company Logo URL:
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Logo URL"
                      type="text"
                      value={kaynaConfig?.logo}
                      name="logo"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Inspection Date:
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      type="date"
                      value={kaynaConfig?.electricalInspectionDate}
                      name="electricalInspectionDate"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                </div>
                <div className="flex flex-row md:flex-col">
                  <div className="m-[0.4vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Primary Color:
                    </label>
                    <input
                      //   className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      className="w-full h-[2.4vw] m-[8px]"
                      type="color"
                      value={kaynaConfig?.primaryColor}
                      name="primaryColor"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                  <div className="m-[0.4vw] ml-[5vw]">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Secondary Color:
                    </label>
                    <input
                      //   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      className="w-full h-[2.4vw] m-[8px]"
                      type="color"
                      value={kaynaConfig?.secondaryColor}
                      name="secondaryColor"
                      onChange={updateKaynaConfig}
                    />
                  </div>
                </div>
                <button
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={updateWidget}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
