from fastapi import APIRouter
from backend.models.input_schema import DatosEntrada
from backend.services.predict_service import predecir

router = APIRouter()

@router.post("/predict")
def hacer_prediccion(datos: DatosEntrada):
    return predecir(datos)