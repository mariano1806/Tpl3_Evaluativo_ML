from fastapi import APIRouter
from backend.models.input_schema import DatosEntrada
from backend.services.predict_service import predecir
import json
router = APIRouter()

@router.post("/predict")
def hacer_prediccion(datos: DatosEntrada):
    return predecir(datos)
@router.get("/metricas")
def obtener_metricas():
    try:
        with open("metricas.json", "r") as f:
            metricas = json.load(f)
        return metricas
    except Exception as e:
        return {"error": str(e)}
