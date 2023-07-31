import InterfaceUI from "@/components/components-ui/UI/Components/InterfaceUI";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
  return <></>;
}
