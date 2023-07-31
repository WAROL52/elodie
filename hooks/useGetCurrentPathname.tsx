import { PathType } from "../components/components-ui/UI/Sidebar/MenuItem";
import { usePathname } from "next/navigation";
import { URLPATHS } from "../components/components-ui/UI/Sidebar/paths";

export function useGetCurrentPathname(defaultTitle = "") {
  const pathName = usePathname();
  const pathSelected: PathType = URLPATHS.find((p) => p.url === pathName) || {
    url: pathName,
    title: defaultTitle,
  };
  return pathSelected;
}
