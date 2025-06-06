import React from "react";
import dados from "../data/habilidades.json";

type Habilidade = {
  id: number;
  titulo: string;
  descricao: string;
};

export default function Habilidades() {
  const habilidades: Habilidade[] = dados.habilidades;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Minhas Habilidades</h2>
      <ul className="space-y-6">
        {habilidades.map(({ id, titulo, descricao }) => (
          <li key={id} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-1">{titulo}</h3>
            <p className="text-gray-700">{descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
