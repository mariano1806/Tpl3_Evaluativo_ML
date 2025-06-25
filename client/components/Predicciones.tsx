"use client";

import { useState } from "react";
import { predictionAPi } from "../src/app/api/prediccion.js";
import { FaUser, FaClock, FaHeart, FaBrain, FaSmile } from "react-icons/fa";

const campos = [
  { key: "edad", label: "Edad", icon: <FaUser />, min: 0, max: 100 },
  { key: "sexo", label: "Sexo (0=Masc, 1=Fem, 2=Otro)", icon: <FaUser />, min: 0, max: 2 },
  { key: "horas_pantalla", label: "Horas frente a pantallas (24hs)", icon: <FaClock />, min: 0, max: 24 },
  { key: "usa_redes_sociales", label: "Usa redes (0=No, 1=Sí)", icon: <FaSmile />, min: 0, max: 1 },
  { key: "duerme_horas", label: "Horas de sueño (24hs)", icon: <FaClock />, min: 0, max: 24 },
  { key: "actividad_fisica", label: "Actividad física (Baja: 0, Media: 1, Alta: 2)", icon: <FaHeart />, min: 0, max: 2 },
  { key: "nivel_estres", label: "Nivel de estrés (0-10)", icon: <FaBrain />, min: 0, max: 10 },
  { key: "medita", label: "¿Meditás? (0=No, 1=Sí)", icon: <FaSmile />, min: 0, max: 1 },
  { key: "horas_redes", label: "Horas en redes sociales (24hs)", icon: <FaClock />, min: 0, max: 24 },
  { key: "nivel_ansiedad", label: "Nivel de ansiedad (0-10)", icon: <FaBrain />, min: 0, max: 10 },
];

export default function Predicciones() {
  const [form, setForm] = useState<Record<string, number>>(
    Object.fromEntries(campos.map((campo) => [campo.key, campo.min]))
  );
  const [resultado, setResultado] = useState<null | number>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const valor = Number(e.target.value);
    setForm((prev) => ({ ...prev, [key]: valor }));
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await predictionAPi(form);
      setResultado(data.prediccion);
    } catch (err) {
      console.error(err);
      setError("Error al obtener predicción");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mt-6 mx-auto rounded-4xl  bg-[rgba(245,157,219,0.23)] px-6 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Analisis de los Factores
      </h1>
      <p className="text-center">Ingresa tus datos para obtener una prediccion personalizada</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {campos.map(({ key, label, icon, min, max }) => (
          <div key={key} className="bg-white shadow-md rounded-3xl p-4 flex flex-col">
            <label className="text-sm text-gray-600 flex items-center gap-2 mb-2">
              <span className="text-pink-600">{icon}</span>
              {label}
            </label>
            <input
              type="number"
              min={min}
              max={max}
              value={form[key]}
              onChange={(e) => handleChange(e, key)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`px-6 py-3 rounded-xl cursor-pointer text-white font-bold transition duration-300 ${
            loading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-blue-300 hover:bg-indigo-900"
          }`}
        >
          {loading ? "Analizando..." : "Obtener Resultado"}
        </button>
      </div>
      {resultado !== null && (
        <div
          className={`max-w-xl mx-auto mt-6 p-6 rounded-xl text-center shadow-lg font-bold text-lg ${
            resultado === 1
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-green-100 text-green-700 border border-green-300"
          }`}
        >
          Riesgo de Burnout:{" "}
          <span className="text-2xl">
            {resultado === 1 ? "ALTO ⚠️" : "BAJO ✅"}
          </span>
        </div>
      )}

      {error && <p className="text-center text-red-600">{error}</p>}
    </div>
  );
}
