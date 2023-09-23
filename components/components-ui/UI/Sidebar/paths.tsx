import { HistoriquesIcon } from "../../icons/HistoriquesIcon";
import { PathType } from "./MenuItem";
import { DashboardIcon } from "@/components/components-ui/icons/DashboardIcon";
import { UtilisateursIcon } from "../../icons/UtilisateursIcon";
import { IconNotifications } from "../../icons/IconNotifications";
import { IconProfile } from "../../icons/IconProfile";
import { IconTaches } from "../../icons/IconTaches";
import { IconMessages } from "../../icons/IconMessages";
import { IconFichiers } from "../../icons/IconFichiers";
export const PATHROOT = "/apps";
export const pathsMenuGenerale: PathType[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Utilisateurs",
    url: "/utilisateurs",
    icon: <UtilisateursIcon />,
  },
].map((path) => ({
  ...path,
  url: PATHROOT + path.url,
}));

export const pathsMenuOutils: PathType[] = [
  {
    title: "Messages",
    url: "/messages",
    icon: <IconMessages />,
  },
  {
    title: "Tâches",
    url: "/taches",
    icon: <IconTaches />,
  },
  {
    title: "Fichiers",
    url: "/fichiers",
    icon: <IconFichiers />,
  },
].map((path) => ({
  ...path,
  url: PATHROOT + path.url,
}));

export const pathsMenuCompte: PathType[] = [
  {
    title: "Profile",
    url: "/profile",
    icon: <IconProfile />,
  },
].map((path) => ({
  ...path,
  url: PATHROOT + path.url,
}));
export const URLPATHS = [
  ...pathsMenuGenerale,
  ...pathsMenuOutils,
  ...pathsMenuCompte,
];
