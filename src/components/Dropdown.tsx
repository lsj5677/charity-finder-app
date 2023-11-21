type DropdownType = {
  options: string[];
  handleDropDown: (clickOption: any) => void;
  className: any;
};

export const Dropdown = ({
  options,
  handleDropDown,
  className,
}: DropdownType) => {
  return (
    <ul className={className}>
      {options.map((option: string, index: number) => {
        return (
          <li
            key={index}
            className="bg-mainBeige hover:bg-pointBeige cursor-pointer rounded-full px-2 py-1"
            onClick={() => handleDropDown(option)}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};
