"use client";
import { ColorVariant } from "@/components/types";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  AnchorHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Spinner } from "react-bootstrap";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  linkVariant?: ColorVariant;
  linkUnderline?: ColorVariant;
  linkUnderlineOpacity?: 0 | 25 | 50 | 75 | 100;
  isLoading?: boolean;
  activeWhenMatch?: boolean;
  activeLoadingWhenClick?: boolean;
  isActive?: boolean;
  needAuth?: boolean;
};

export default function ButtonLink({
  children,
  icon,
  iconPosition,
  linkVariant,
  linkUnderline,
  linkUnderlineOpacity,
  isLoading,
  activeWhenMatch,
  activeLoadingWhenClick,
  isActive,
  className,
  needAuth,
  href,
  onClick,
  ...rest
}: Props) {
  const pathname = usePathname();
  const [isLoadingState, setLoading] = useState(false);
  const [isActiveState, setActive] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const { status } = useAuth();

  useEffect(() => {
    if (isClick && pathname === href) return;
    if (isLoading || (isClick && activeLoadingWhenClick)) {
      setLoading(true);
    }
  }, [isClick, activeLoadingWhenClick, isLoading, href, pathname]);

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    if (isActive) {
      setActive(true);
      return;
    }
    if (activeWhenMatch) {
      setActive(pathname.startsWith(href || "<..>"));
    }
  }, [pathname, activeWhenMatch, href, isActive]);

  const fnClick = [onClick, () => setIsClick(true)];
  const Logo = isLoadingState ? (
    <Spinner animation="border" size="sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    icon
  );
  const disabled = needAuth ? !(status == "authenticated") : false;
  return (
    <Link
      href={href || ""}
      className={`icon-link icon-link-hover link-${linkVariant || "primary"} ${
        isActiveState ? "active" : ""
      }
      ${disabled ? `disabled` : ""}
      link-underline-${linkUnderline || "primary"} link-underline-opacity-${
        linkUnderlineOpacity || 50
      } ${className}`}
      onClick={(...args) => fnClick.map((fn) => fn?.(...args))}
      {...rest}
    >
      {" "}
      {iconPosition == "right"
        ? [children, " ", Logo]
        : [Logo, " ", children]}{" "}
    </Link>
  );
}
