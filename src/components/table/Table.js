import React from "react";

function Table({ data, title, allowedKeys,xScroll }) {
  console.log(data);
  return (
    <div  className="shadow-md sm:rounded-lg p-4 border border-solid border-current">
      <h3 className="text-md antialiased font-semibold text-black mb-2">
        {title}
      </h3>
      <table
        class=" rounded-lg w-full text-sm text-left text-gray-400 border"
        //inline-table  if xScroll is false or undefined block if true
        style={{ overflowX: "scroll",display: xScroll ? "block" : "inline-table" }}
      >
        <thead class="text-xs text-black  uppercase bg-gray-200">
          <tr>
            {Object.keys(data[0]).map((item, index) => {
              if (allowedKeys.includes(item) || allowedKeys.length == 0) {
                return (
                  <th key={index} scope="col" class="py-2 px-2">
                    {item.replace("_"," ")}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody className="over-flow-auto">
          {data?.map((items, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800  hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-600"
              >
                {Object.keys(items).map((item) => {
                  if (allowedKeys.includes(item) || allowedKeys.length == 0) {
                    return <td class="py-2 px-2">{items[item]}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
