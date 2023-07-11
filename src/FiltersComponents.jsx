import { useState } from "react";
import PropTypes from "prop-types";

const options = [
  { label: "In Stock", value: "inStock" },
  { label: "Pre Order", value: "preOrder" },
  { label: "Out of Stock", value: "outOfStock" },
];

export function AvailabilityFilter({ inStock, preOrder, outOfStock }) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOpen = (prev) => setOpen(!prev);
  const handleSelect = (value) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  const resetFilter = () => setSelected([]);

  return (
    <details
      className="border rounded border-gray-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
      open={isOpen}
    >
      <summary
        className="flex items-center justify-between gap-2 p-4 text-gray-900 bg-white transition"
        onClick={toggleOpen}
      >
        <span className="text-sm font-medium">Availability</span>
        <span
          className={`transition ${isOpen ? "group-open:-rotate-180" : ""}`}
        >
          <svg
            className={`h-4 w-4 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div className="border-t border-gray-200 bg-white">
        <header className="flex items-center justify-between p-4">
          <span className="text-sm text-gray-700">
            {selected.length} Selected
          </span>
          <button
            type="button"
            className="underline underline-offset-4 text-sm text-gray-900"
            onClick={resetFilter}
          >
            Reset
          </button>
        </header>

        <ul className="border-t border-gray-200 p-4 space-y-1">
          {options.map(({ label, value }) => (
            <li key={value}>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name={value}
                  className="h-5 w-5 rounded border-gray-300"
                  checked={selected.includes(value)}
                  onChange={() => handleSelect(value)}
                />
                <span className="text-sm font-medium text-gray-700">
                  {label} ({eval(value) || 0}+)
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

AvailabilityFilter.propTypes = {
  inStock: PropTypes.number.isRequired,
  preOrder: PropTypes.number.isRequired,
  outOfStock: PropTypes.number.isRequired,
};
// _________________________________________________________________________
export function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleReset = () => {
    setPriceFrom("");
    setPriceTo("");
  };

  return (
    <details
      className={`overflow-hidden rounded border border-gray-300 ${
        isOpen ? "open" : ""
      }`}
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
        onClick={handleToggle}
      >
        <span className="text-sm font-medium">Price</span>
        <span
          className={`transition group-open:-rotate-180 h-4 w-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>
      {isOpen && (
        <>
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">
              The highest price is $600
            </span>
            {priceFrom || priceTo ? (
              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
                onClick={handleReset}
              >
                Reset
              </button>
            ) : null}
          </header>
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              {["From", "To"].map((label) => (
                <label
                  key={label}
                  htmlFor={`FilterPrice${label}`}
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    id={`FilterPrice${label}`}
                    placeholder={label}
                    value={label === "From" ? priceFrom : priceTo}
                    onChange={(event) =>
                      label === "From"
                        ? setPriceFrom(event.target.value)
                        : setPriceTo(event.target.value)
                    }
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </details>
  );
}
