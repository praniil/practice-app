import React, { useState } from "react";

const searchElements: string[] = [
  "Pranil",
  "Swopnil",
  "React",
  "JavaScript",
  "Golang",
  "Gmail",
  "Microprocessor",
];

const SearchFilter = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredElements, setFilteredElements] = useState<string[]>([]);
  const [isFilteredELements, setisFilteredElements] = useState<boolean>(false);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchItem(value);
    const filtered = searchElements.filter((element: string) =>
      element.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredElements(filtered);
    setisFilteredElements(true);
    console.log(filteredElements);
  }
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        value={searchItem}
        onChange={handleChange}
      />
      <button>Search</button>
      {isFilteredELements
        ? filteredElements.map((items, index) => <li>{items}</li>)
        : searchElements.map((items, index) => <li>{items}</li>)}
    </div>
  );
};

export default SearchFilter;
