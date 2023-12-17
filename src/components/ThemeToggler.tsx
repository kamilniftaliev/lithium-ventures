import { StyledThemeToggler } from "@/styles";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isDark: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

export function ThemeToggler({ isDark, toggle }: Props) {
  return (
    <StyledThemeToggler.Button onClick={() => toggle(isDark => !isDark)}>
      <StyledThemeToggler.Icon
        src={`/icons/${isDark ? "sun" : "moon"}.svg`}
        width={24}
        height={24}
        alt="Toggle theme"
      />
    </StyledThemeToggler.Button>
  );
}
