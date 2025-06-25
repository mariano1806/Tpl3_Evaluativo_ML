# Predicción del Riesgo de Burnout en Jóvenes a Partir de Hábitos Digitales

El **burnout** (agotamiento emocional y mental) es una condición cada vez más frecuente entre estudiantes, jóvenes profesionales y usuarios intensivos de tecnología. Se asocia con **fatiga crónica, ansiedad, bajo rendimiento y problemas de salud**.

En los últimos años, se ha detectado un aumento de casos relacionados con el **uso excesivo de pantallas, redes sociales y la falta de sueño**, especialmente tras la pandemia y el auge del trabajo/estudio remoto.

> Para este proyecto se utilizó un **dataset propio**, que recopila información sobre hábitos digitales y estado emocional en más de 500 personas.

---

## ¿Por qué este caso?

Elegimos este caso porque:

- **Realista y aplicable**: cada vez más instituciones (universidades, empresas, apps de bienestar) buscan soluciones basadas en datos para detectar y prevenir el agotamiento.
- **Multivariable**: el burnout no depende de una sola causa, y el Machine Learning permite detectar patrones complejos entre múltiples factores.
- **Actual y urgente**: es un problema en aumento en la sociedad digital moderna.
- **Analíticamente valioso**: permite entrenar modelos de regresión y clasificación, y entender qué factores impactan más en el bienestar mental.

---

## Objetivo del Proyecto

El objetivo de este proyecto es desarrollar una herramienta basada en **Machine Learning** que permita **predecir el riesgo de burnout** a partir de hábitos digitales y datos personales. Para ello:

- Entrenamos un modelo supervisado usando **Scikit-learn**.
- Construimos una API funcional utilizando **FastAPI** y **Uvicorn**.
- Diseñamos una interfaz interactiva con **React** y **Next.js** para que los usuarios puedan ingresar datos y visualizar sus resultados de forma clara y atractiva.

Aunque esta herramienta no reemplaza una evaluación psicológica profesional, sugiere una forma práctica de **concientizar sobre la salud mental** y demostrar cómo la tecnología puede colaborar en la prevención.

---

## Tecnologías Utilizadas

### 🔙 Backend (Machine Learning + API)

- **Python 3.10+**
- **Scikit-learn** – Entrenamiento del modelo de clasificación
- **Pandas** – Procesamiento y análisis de datos
- **FastAPI** – Framework para la construcción de la API
- **Uvicorn** – Servidor ASGI para correr la API

### 🔜 Frontend (Interfaz de Usuario)

- **React** – Librería principal para construir la interfaz
- **TypeScript** – Tipado estático para mayor escalabilidad
- **Next.js** – Framework para estructura y despliegue optimizado
- **Tailwind CSS** – Framework de estilos para UI rápida y moderna

---


## Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/mariano1806/Tpl3_Evaluativo_ML.git
cd Tpl3_Evaluativo_ML
```

### 2. Backend (FastAPI)

```bash
python -m venv env
env\Scripts\activate   # o source env/bin/activate en Linux/macOS
pip install -r requirements.txt
uvicorn backend.main:app --reload
```

### 3. Frontend (React)

```bash
cd client
npm install
npm run dev
```
