import { StyledThemeToggler } from "@/styles";
import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
  isDark: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

export function ThemeToggler({ isDark, toggle }: Props) {
  const onClick = useCallback(
    () => {
      window.localStorage.setItem('theme', isDark ? 'light' : 'dark')
      toggle(isDark => !isDark);
    },
    [isDark, toggle],
  )
  

  return (
    <StyledThemeToggler.Button onClick={onClick}>
      <StyledThemeToggler.Icon
        src={`/icons/${isDark ? "sun" : "moon"}.svg`}
        width={24}
        height={24}
        alt="Toggle theme"
      />
    </StyledThemeToggler.Button>
  );
}
