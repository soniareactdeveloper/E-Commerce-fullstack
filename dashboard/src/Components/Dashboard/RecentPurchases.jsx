import { FaEllipsisV } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import clsx from "clsx";

const purchases = [
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    avatar: "https://i.pravatar.cc/40?img=1",
    status: "Delivered",
    amount: "$400.00",
  },
  {
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Annette Black",
    avatar: "https://i.pravatar.cc/40?img=2",
    status: "Pending",
    amount: "$200.00",
  },
  {
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    avatar: "https://i.pravatar.cc/40?img=1",
    status: "Delivered",
    amount: "$250.00",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Kristin Watson",
    avatar: "https://i.pravatar.cc/40?img=3",
    status: "Canceled",
    amount: "$400.00",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Esther Howard",
    avatar: "https://i.pravatar.cc/40?img=4",
    status: "Delivered",
    amount: "$100.00",
  },
  {
    product: "Samsung A50",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Jerome Bell",
    avatar: "https://i.pravatar.cc/40?img=5",
    status: "Pending",
    amount: "$150.00",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Brooklyn",
    avatar: "https://i.pravatar.cc/40?img=6",
    status: "Canceled",
    amount: "$150.00",
  },
];

const getStatusColor = (status) => {
  return clsx("h-2 w-2 rounded-full", {
    "bg-green-500": status === "Delivered",
    "bg-yellow-500": status === "Pending",
    "bg-red-500": status === "Canceled",
  });
};

const RecentPurchases = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto font-poppins">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Purchases</h2>
        <FaEllipsisV className="text-gray-400 cursor-pointer" />
      </div>

      <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-black font-semibold text-md">
            <th className="px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2">Products</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Customer name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((item, index) => (
            <tr
              key={index}
              className="border border-gray-900 hover:bg-gray-50 transition duration-200"
            >
              <td className="px-4 py-3">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-3 font-medium text-gray-700">{item.product}</td>
              <td className="px-4 py-3 text-gray-600">{item.orderId}</td>
              <td className="px-4 py-3 text-gray-600">{item.date}</td>
              <td className="px-4 py-3 flex items-center gap-2">
                <img
                  src={item.avatar}
                  alt={item.customer}
                  className="w-6 h-6 rounded-full"
                />
                <span>{item.customer}</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className={getStatusColor(item.status)}></span>
                  <span className="text-gray-700">{item.status}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-700">{item.amount}</td>
              <td className="px-8 py-3">
                <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentPurchases;
