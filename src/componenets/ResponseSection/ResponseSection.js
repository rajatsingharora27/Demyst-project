import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ResponseSection = () => {
  const [accoutResult, setAccountResult] = useState([]);
  const accounSheetDetails = useSelector(
    (store) => store.loanDetailsInfo.accoutingResponse
  );

  useEffect(() => {
    setAccountResult(accounSheetDetails);
  }, [accounSheetDetails]);

  return (
    <div className="w-1/2 text-black border-solid border-2 border-black h-max rounded-md p-8">
      {accoutResult.length !== 0 ? (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Year
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Month
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Profit Or loss
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Asset Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounSheetDetails.map((res, idx) => {
                      return (
                        <tr
                          class="border-b dark:border-neutral-500"
                          key={idx + 1}
                        >
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {idx + 1}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {res.year}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {" "}
                            {res.month}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {res.profitOrLoss}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {res.assetsValue}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            // onClick={sendRequst}
          >
            Request Loan
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResponseSection;
