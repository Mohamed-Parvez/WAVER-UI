import React from "react";

const Search = () => {
  return (
    <div className="max-w-screen-md w-full">
      <input
        placeholder="Search Components..."
        className="body-regular h-8 shadow-sm max-w-screen-md w-full rounded-[8px] pl-3.5 ring-1 ring-slate-200
         dark:ring-slate-700 outline-none bg-gray-50 dark:bg-gray-900"
      />
    </div>
  );
};

export default Search;
