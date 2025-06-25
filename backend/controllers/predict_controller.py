from fastapi import APIRouter
from backend.models.input_schema import DatosEntrada
from backend.services.predict_service import predecir
from pathlib import Path
import json
router = APIRouter()

@router.post("/predict")
def hacer_prediccion(datos: DatosEntrada):
    return predecir(datos)
@router.get("/metricas")
def obtener_metricas():
    try:
        ruta_actual = Path().resolve() / "backend" / "controllers"
        ruta_metricas = ruta_actual.parent / "train" / "metricas.json"
        with open(ruta_metricas, "r") as f:
            metricas = json.load(f)
        return metricas
    except Exception as e:
        return {"error": str(e)}