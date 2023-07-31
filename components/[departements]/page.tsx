import React from "react";

type Props = {
  params: {
    departements: string;
  };
};

export default function page({ params }: Props) {
  const { departements } = params;
  return <div>page {departements}</div>;
}
