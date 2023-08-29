import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ResponseSection = () => {
  const [accoutResult, setAccountResult] = useState([]);
  const [loanApprovalRequest, setloanApprovalRequest] = useState({});
  const accounSheetDetails = useSelector(
    (store) => store.loanDetailsInfo.accoutingResponse
  );
  const loanApproval = useSelector((store) => store.companyInfo.info);

  useEffect(() => {
    setloanApprovalRequest({
      accountDetails: loanApproval,
      sheetDetails: accounSheetDetails,
    });
    setAccountResult(accounSheetDetails);
  }, [accounSheetDetails]);

  const getLoanRequest = () => {
    console.log(loanApprovalRequest, "Loan");

    //uncomment when backend is complete
    // axios.post("post_request_toget_loan_approval", loanApprovalRequest);
  };

  return (
    <div className="w-1/2 text-black border-solid border-2 border-black h-max rounded-md p-8">
      {accoutResult.length !== 0 ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Year
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Month
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Profit Or loss
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Asset Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounSheetDetails.map((res, idx) => {
                      return (
                        <tr
                          className="border-b dark:border-neutral-500"
                          key={idx + 1}
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {idx + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {res.year}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {" "}
                            {res.month}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {res.profitOrLoss}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
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
            onClick={getLoanRequest}
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
