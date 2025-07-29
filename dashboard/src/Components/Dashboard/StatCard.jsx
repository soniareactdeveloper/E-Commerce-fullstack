import { FaShoppingBag } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";

const StatCard = ({ title, amount, percentage, iconColor, textColor }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-[220px] max-w-xs mx-auto">
      {/* Title + 3 Dots */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-500 font-medium">{title}</span>
        <FaEllipsisV className="text-gray-400 cursor-pointer" />
      </div>

      {/* Amount + Icon + Percentage */}
      <div className="flex items-center justify-between mb-3">
        {/* Left: Icon + Amount */}
        <div className="flex items-center gap-2">
          <div className={`text-white p-2 rounded-full ${iconColor}`}>
            <FaShoppingBag />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">${amount}</h3>
        </div>

        {/* Right: Percentage */}
        <div className={`flex items-center text-sm font-semibold ${textColor}`}>
          <FaArrowUpRightFromSquare className="mr-1" />
          {percentage}%
        </div>
      </div>

      {/* Compared to */}
      <div>
        <span className="text-sm text-gray-400">Compared to Jan 2022</span>
      </div>
    </div>
  );
};

export default StatCard;
