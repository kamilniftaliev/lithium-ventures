import { Page } from "@/styles";
import { PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <Page.SectionTitleContainer>
      <Page.SectionColor />
      <Page.SectionTitleContent>{children}</Page.SectionTitleContent>
    </Page.SectionTitleContainer>
  );
}
