import React from "react";
import { DetailItemProps } from "./props";

const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <div className="flex flex-row ">
      <p className="text-xl">{label}:&nbsp;</p>
      <p className="text-xl">{value}</p>
    </div>
  );
};

export default DetailItem;
