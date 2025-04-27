import { Color } from "@Styles/colors";
import { useEffect, useState } from "react";
import { BaseCheckBox, CheckBoxContainer, CheckBoxInput, CheckBoxLabelText, Label } from "./CheckBox.styled";

export type CheckBoxValue = string | number;

type AllCheckedWhenType = "every" | "some";

interface CheckBoxProps {
  value: CheckBoxValue;
  checkedSet: CheckBoxValue[];
  setCheckedSet: (checkedSet: CheckBoxValue[]) => void;
  className?: string;
  label?: string;
  labelSize?: string;
  labelColor?: Color;
  width?: string;
  disabled?: boolean;
  isAll?: boolean;
  allValues?: CheckBoxValue[];
  allCheckedWhen?: AllCheckedWhenType;
  customCheckHandler?: (checked: boolean, value?: CheckBoxValue) => void;
  noBackground?: boolean;
}

export const CheckBox = ({ value, checkedSet, setCheckedSet, className, label, labelSize, labelColor, width, disabled, isAll, allValues, allCheckedWhen = "every", customCheckHandler, noBackground }: CheckBoxProps) => {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    isAll && allValues ? (allCheckedWhen === "some" ? setCheck(checkedSet.length > 0) : setCheck(checkedSet.length === allValues.length)) : setCheck(checkedSet.includes(value));
  }, [checkedSet, allValues, isAll, allCheckedWhen]);

  const checkHandler = () => {
    if (!check) {
      // Check Logic
      const newCheckedSet = [...checkedSet];
      newCheckedSet.push(value);
      setCheckedSet([...newCheckedSet]);
    } else if (checkedSet.some((item) => item === value)) {
      // Uncheck Logic
      const newCheckedSet = checkedSet.filter((item) => item !== value);
      setCheckedSet(newCheckedSet);
    }
  };

  const allCheckHandler = () => {
    if (!check && allValues) {
      setCheckedSet(allValues);
    } else {
      setCheckedSet([]);
    }
  };

  const onCheck = () => {
    if (customCheckHandler) customCheckHandler(!check, value);
    setCheck(!check);
    isAll ? allCheckHandler() : checkHandler();
  };

  return (
    <CheckBoxContainer
      $checked={check}
      $width={width}
      $noBackground={noBackground}
    >
      <CheckBoxInput
        id={`checkbox_${value}_${className}`}
        className={className}
        checked={check}
        disabled={disabled}
        type="checkbox"
        value={value}
        readOnly
        $noBackground={noBackground}
      />
      <Label
        htmlFor={`checkbox_${value}_${className}`}
        onClick={onCheck}
      >
        <BaseCheckBox
          className="base-checkbox"
          $isAll={isAll}
          $noBackground={noBackground}
        />
        {label && (
          <CheckBoxLabelText
            $labelSize={labelSize}
            $labelColor={labelColor}
            $checked={check}
          >
            {label}
          </CheckBoxLabelText>
        )}
      </Label>
    </CheckBoxContainer>
  );
};
