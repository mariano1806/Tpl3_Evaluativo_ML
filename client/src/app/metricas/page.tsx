"use client";
import { useEffect, useState } from "react";
import { getMetricas } from "../api/metricas.js";
import { FaBrain, FaChartLine, FaFlask, FaCogs } from "react-icons/fa";

interface ClaseMetrica {
  precision: number;
  recall: number;
  "f1-score": number;
  support: number;
}

interface MetricasModelo {
  "0": ClaseMetrica;
  "1": ClaseMetrica;
  accuracy: number;
  accuracy_porcentaje: number;
  "macro avg": ClaseMetrica;
  "weighted avg": ClaseMetrica;
}

function InfoBox({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex rounded-4xl  bg-[rgba(245,157,219,0.23) items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
      <div className="text-pink-600 text-xl">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}

function Metrica({ nombre, valor }: { nombre: string; valor: number }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h4 className="text-sm text-gray-600 mb-1">{nombre}</h4>
      <p className="text-lg font-semibold mb-1">{valor.toFixed(1)}%</p>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-600 h-3 rounded-full transition-all"
          style={{ width: `${valor}%` }}
        />
      </div>
    </div>
  );
}

function DatoSimple({ nombre, valor }: { nombre: string; valor: number }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <h4 className="text-sm text-gray-600 mb-1">{nombre}</h4>
      <p className="text-lg font-bold text-indigo-700">{valor}</p>
    </div>
  );
}

export default function ResumenYMetricas() {
  const [metricas, setMetricas] = useState<MetricasModelo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMetricas() {
      setLoading(true);
      try {
        const data = await getMetricas();
        setMetricas(data);
      } catch (e) {
        console.error(e);
        setError("Error al obtener las métricas");
      } finally {
        setLoading(false);
      }
    }
    fetchMetricas();
  }, []);

  return (
    <div className="max-w-5xl rounded-4xl mt-6 bg-[rgba(37,100,72,0.21)] mx-auto px-6 py-10 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Modelo de IA Avanzado</h2>
        <p className="text-gray-600">Regresión logística optimizada con técnicas de machine learning</p>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <InfoBox icon={<FaBrain />} title="Algoritmo" value="Regresión Logística"  />
  <InfoBox icon={<FaCogs />} title="Librería ML" value="Scikit-Learn" />
  <InfoBox icon={<FaChartLine />} title="Caso aplicado" value="Predicción de Burnout" />
  <InfoBox icon={<FaChartLine />} title="Variables de entrada" value="10 factores clave" />
  <InfoBox icon={<FaFlask />} title="Conjunto de Entrenamiento" value="80% del dataset" />
  <InfoBox icon={<FaFlask />} title="Conjunto de Prueba" value="20% del dataset" />
</div>

      <div>
        <h3 className="text-2xl font-bold mb-4 text-center">Rendimiento del Modelo</h3>

        {loading && <p className="text-center text-gray-500">Cargando métricas...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {metricas && (
       <div className="space-y-10">
  <div className="p-8">
    <Metrica nombre="Accuracy General" valor={metricas.accuracy * 100} />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className=" rounded-xl  p-6 ">
      <h2 className="text-lg font-bold text-green-700 mb-4 border-b pb-2">
        Métricas de Clase 0 (Sin burnout)
      </h2>
      <div className="space-y-4">
        <Metrica nombre="Precisión" valor={metricas["0"].precision * 100} />
        <Metrica nombre="Recall" valor={metricas["0"].recall * 100} />
        <Metrica nombre="F1-Score" valor={metricas["0"]["f1-score"] * 100} />
        <DatoSimple nombre="Support" valor={metricas["0"].support} />
      </div>
    </div>
    <div className=" rounded-xl  p-6 ">
      <h2 className="text-lg font-bold text-red-700 mb-4 border-b pb-2">
        Métricas de Clase 1 (Con burnout)
      </h2>
      <div className="space-y-4">
        <Metrica nombre="Precisión" valor={metricas["1"].precision * 100} />
        <Metrica nombre="Recall" valor={metricas["1"].recall * 100} />
        <Metrica nombre="F1-Score" valor={metricas["1"]["f1-score"] * 100} />
        <DatoSimple nombre="Support" valor={metricas["1"].support} />
      </div>
    </div>
  </div>
</div>
        )}
      </div>
    </div>
    
  );
}
