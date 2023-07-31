import { PathType } from "../Sidebar/MenuItem";
import ButtonLink from "./ButtonLink";

export function ButtonPAth({ path }: { path: PathType }) {
  return (
    <ButtonLink href={path.url} icon={path.icon}>
      {path.title}
    </ButtonLink>
  );
}
