import { Dropdown } from "../dropdown/Dropdown";

export interface InputWithDropdownProps {
  inputPlaceholder: string;
}

export const InputWithDropdown: React.FC<InputWithDropdownProps> = ({
  inputPlaceholder,
}) => {
  return (
    <div className="input-with-dropdown">
      <input
        className="input-with-dropdown__input focus-styling__input"
        type="text"
        placeholder={inputPlaceholder}
      />
      <Dropdown
        ariaLabel="input field dropdown"
        list={[
          { title: "Alle indekser" },
          { title: "Alle indekser" },
          { title: "Alle indekser" },
        ]}
        arrowIcon="chevron"
        classNames="dropdown--grey-borders input-with-dropdown__dropdown"
        innerClassNames={{
          select: "dropdown__select--inline-body-font focus-styling",
          arrowWrapper: "dropdown__arrows--inline",
        }}
      />
      <button>
        <img
          className="input-with-dropdown__icon"
          src="icons/collection/MinusButton.svg"
          alt="Minus button icon"
        />
      </button>
    </div>
  );
};

export default {};
