import type { MetaFunction } from "@remix-run/node";
import Page from "~/dashboard/page";

export const meta: MetaFunction = () => {
  return [
    { title: "Monitoramento de Pacientes" },
    { name: "description", content: "Monitoramento" },
  ];
};

export default function Index() {
  return (
    <Page />
  );
}