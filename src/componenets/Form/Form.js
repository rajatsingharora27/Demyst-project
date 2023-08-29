import React, { useState } from "react";

const Form = () => {
  const [basicInfo, setBasicInfo] = useState({});
  console.log(basicInfo);

  return (
    <div className="flex justify-around items-center m-9 gap-x-2 ">
      <form className="border-solid border-2 border-black p-10 rounded-md w-1/2">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="company_name"
            id="company_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              setBasicInfo({ ...basicInfo, companyName: e.target.value });
            }}
          />
          <label
            for="company_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="year_established"
            id="year_established"
            min="1900"
            max="2099"
            step="1"
            // value="2016"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              setBasicInfo({ ...basicInfo, year: e.target.value });
            }}
          />
          <label
            for="year_established"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Year of Establishment
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="profit_or_loss"
            id="profit_or_loss"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              setBasicInfo({ ...basicInfo, profitOrLoss: e.target.value });
            }}
          />
          <label
            for="profit_or_loss"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Profit or Loss Summary
          </label>
        </div>
        <h4 className="font-sans text-base mb-4"> Accounting Type</h4>
        <div class="flex items-center mb-4 gap-x-3">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() =>
              setBasicInfo({ ...basicInfo, accountingType: "Xero" })
            }
          />
          <label
            for="default-radio-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Xero
          </label>

          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() =>
              setBasicInfo({ ...basicInfo, accountingType: "MYOB" })
            }
          />
          <label
            for="default-radio-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            MYOB
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get balance sheet
        </button>
      </form>

      {/* Response section */}
      <div className="w-1/2 bg-black">hello</div>
    </div>
  );
};

export default Form;
