import { colors } from "@/app/assets/styles/global";
import { styled } from "styled-components";

export const NavPage = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;

  ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    list-style: none;
  }
`

export const PageTitle = styled.span`
  font-weight: 600;
`

export const PageItem = styled.li<{ active?: boolean }>`
  color: ${colors.gray};

  &.active {
    border: 2px solid ${colors.blue500};
    padding: 4px 12px;
    border-radius: 8px;
    color: ${colors.blue500};
  }
`;

export const PageLink = styled.a`
    font-weight: 600;
    font-size: 14px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`;