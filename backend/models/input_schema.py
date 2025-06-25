from pydantic import BaseModel

class DatosEntrada(BaseModel):
    edad: int
    sexo: int
    horas_pantalla: float
    usa_redes_sociales: bool
    duerme_horas: float
    actividad_fisica: int
    nivel_estres: int
    medita: bool
    horas_redes: float
    nivel_ansiedad: int