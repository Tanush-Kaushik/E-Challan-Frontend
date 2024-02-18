import React from 'react';

export default function Table({ ticketData }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500  text-gray-400">
        <thead className="text-xs text-gray-900 uppercase  text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Challan Number
            </th>
            <th scope="col" className="px-6 py-3">
              Vehicle Number
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Receipt
            </th>
          </tr>
        </thead>
        <tbody>
          {ticketData.map((i) => {
            return (
              <tr className="bg-gray-800">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-gray-400"
                >
                  {i.challanNumber}
                </td>
                <td className="px-6 py-4 text-gray-400">{i.vehicleNumber}</td>
                <td className="px-6 py-4 text-gray-400">{i.date}</td>
                <td className="px-6 py-4 text-gray-400">{i.status}</td>
                <td className="px-6 py-4 text-gray-400">{i.amount}</td>
                <td className="px-6 py-4 text-gray-400">{i.receipt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
