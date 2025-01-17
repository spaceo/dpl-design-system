import clsx from "clsx";
import { ButtonIcon } from "./ButtonIcon";
import { getSize, getVariant } from "./helper";
import { ButtonSize, ButtonType, ButtonVariant } from "./types";

export type ButtonProps = {
  label: string;
  buttonType: ButtonType;
  disabled: boolean;
  collapsible: boolean;
  size: ButtonSize;
  variant: ButtonVariant;
  onClick?: () => void;
  classNames?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  buttonType,
  disabled,
  collapsible,
  size,
  variant,
  onClick,
  classNames,
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "btn-primary",
        getVariant(variant),
        getSize(size),
        "arrow__hover--right-small",
        classNames
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {`${label} ${buttonType === "search" ? "(6)" : ""}`}
      <ButtonIcon collapsible={collapsible} buttonType={buttonType} />
    </button>
  );
};
