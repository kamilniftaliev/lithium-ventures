import { useOutsideClick } from "@/hooks";
import { StyledDropdown } from "@/styles";
import { DropdownItem } from "@/types";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";


type Props = {
  items: DropdownItem[];
  selectedItem: DropdownItem;
  onSelect: Dispatch<SetStateAction<DropdownItem>>;
};

export function Dropdown({ items, selectedItem, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
  const handleSelect = useCallback(
    (item: DropdownItem) => {
      onSelect(item);
      setIsOpen(false);
    },
    [onSelect]
  );

  useOutsideClick(containerRef.current, () => setIsOpen(false))

  return (
    <StyledDropdown.Container ref={containerRef}>
      <StyledDropdown.SelectedItem onClick={toggle}>
        {selectedItem.label}
        <StyledDropdown.ArrowIcon
          src="/icons/arrow-down.svg"
          width={12}
          height={12}
          alt="Toggle the dropdown"
          $isFlipped={isOpen}
        />
      </StyledDropdown.SelectedItem>
      {isOpen && (
        <StyledDropdown.OptionsContainer>
          <StyledDropdown.OptionsContainerArrow
            src="/icons/arrow-down.svg"
            width={12}
            height={12}
            alt="Dropdown Arrow"
            $isFlipped
          />
          {items.map((item) => (
            <StyledDropdown.Option
              key={item.value}
              onClick={() => handleSelect(item)}
            >
              {item.label}
              {selectedItem.value === item.value && (
                <StyledDropdown.ArrowIcon
                  src="/icons/check.svg"
                  width={20}
                  height={20}
                  alt="Toggle the dropdown"
                />
              )}
            </StyledDropdown.Option>
          ))}
        </StyledDropdown.OptionsContainer>
      )}
    </StyledDropdown.Container>
  );
}
