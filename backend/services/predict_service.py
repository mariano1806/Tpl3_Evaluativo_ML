import joblib
from backend.models.input_schema import DatosEntrada

# Cargar modelo una sola vez al inicio
modelo = joblib.load("backend/train/analisis_burnout.pkl")

def predecir(datos: DatosEntrada):
    try:
        # Preparar la entrada en formato 2D para el modelo
        entrada = [[
    datos.edad,
    datos.sexo,
    datos.horas_pantalla,
    datos.usa_redes_sociales,
    datos.horas_redes,
    datos.duerme_horas,
    datos.actividad_fisica,
    datos.nivel_estres,
    datos.nivel_ansiedad,
    datos.medita
]]
        # Predecir
        resultado = modelo.predict(entrada)
        # Convertir a int y devolver
        return {"prediccion": int(resultado[0])}
    except Exception as e:
        # Manejo simple de error
        return {"error": str(e)}
