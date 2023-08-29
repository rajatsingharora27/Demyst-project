import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ResponseSection = () => {
  const accounSheetDetails = useSelector(
    (store) => store.loanDetailsInfo.accoutingResponse
  );
  useEffect(() => {
    console.log(accounSheetDetails, "accounDetail");
  }, [accounSheetDetails]);

  return (
    <div className="w-1/2 text-black border-solid border-2 border-black h-[100vh] rounded-md p-8"></div>
  );
};

export default ResponseSection;
