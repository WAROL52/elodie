"use client";
import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ButtonLink from "../Components/ButtonLink";
export type PathType = {
  icon?: ReactNode;
  url: string;
  title?: string;
};
export type NavItemProps = PropsWithChildren<PathType>;

export function MenuItem({
  children,
  icon,
  url,
  title,
}: NavItemProps): React.JSX.Element {
  return (
    <li className="nav-item">
      <ButtonLink
        className={`nav-link text-white `}
        activeWhenMatch
        activeLoadingWhenClick
        needAuth
        href={url}
        icon={icon}
      >
        <span className="nav-link-text ms-1">{title || children}</span>
      </ButtonLink>
    </li>
  );
}
