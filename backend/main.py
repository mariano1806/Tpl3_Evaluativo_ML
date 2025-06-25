from fastapi import FastAPI
from backend.controllers import predict_controller
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)


app.include_router(predict_controller.router)

@app.get("/")
def root():
    return {"mensaje": "API funcionando correctamente"}