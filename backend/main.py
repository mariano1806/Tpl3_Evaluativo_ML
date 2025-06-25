from fastapi import FastAPI
from backend.controllers import predict_controller

# Inicialización de la app
app = FastAPI()

# Registro de rutas del controlador
app.include_router(predict_controller.router)

@app.get("/")
def root():
    return {"mensaje": "API funcionando correctamente"}