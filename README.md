# 🏡 Bangalore House Price Prediction

A Machine Learning web application that predicts house prices in Bangalore based on user inputs such as location, total square feet, number of bedrooms (BHK), and bathrooms.

The project uses a trained Scikit-learn regression model, a Flask backend API, and an interactive HTML/CSS/JavaScript frontend.

---

## 📌 Project Overview

The objective of this project is to build an end-to-end machine learning application that helps estimate house prices in Bangalore using historical housing data.

The application allows users to:
- Select a location
- Enter total square feet
- Choose the number of BHK
- Select the number of bathrooms
- Get the predicted house price instantly

---

## 🚀 Features

- House price prediction using Machine Learning
- Interactive and user-friendly web interface
- Flask REST API for prediction
- Data preprocessing and feature engineering
- Location-based prediction
- Responsive frontend

---

## 🛠️ Tech Stack

### Programming Language
- Python

### Machine Learning
- Scikit-learn
- NumPy
- Pandas

### Backend
- Flask
- Flask-CORS

### Frontend
- HTML5
- CSS3
- JavaScript

### Tools
- Jupyter Notebook
- VS Code
- PyCharm
- Git
- GitHub

---

## 📂 Project Structure

```
bangalore-house-prediction/
│
├── Client/
│   ├── app.html
│   ├── app.css
│   └── app.js
│
├── Model/
│   └── Bangalore_House_Price_Model.ipynb
│
├── Server/
│   ├── artifacts/
│   │   ├── banglore_home_prices_model.pickle
│   │   └── columns.json
│   ├── server.py
│   └── util.py
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

## 📊 Dataset

The project uses the Bangalore House Price Dataset.

Data preprocessing steps include:

- Removing unnecessary columns
- Handling missing values
- Feature engineering
- Outlier detection and removal
- Location dimensionality reduction
- One-Hot Encoding for categorical features

---

## 🤖 Machine Learning Workflow

1. Data Collection
2. Data Cleaning
3. Exploratory Data Analysis (EDA)
4. Feature Engineering
5. Outlier Removal
6. Model Training
7. Hyperparameter Tuning
8. Model Evaluation
9. Model Serialization
10. Flask API Development
11. Frontend Integration

---

## 📈 Model Used

- Linear Regression

### Evaluation Metrics

- R² Score
- Cross Validation
- GridSearchCV

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/bangalore-_house_prediction.git
```

### Move into project directory

```bash
cd bangalore-_house_prediction
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Start the Flask server

```bash
cd Server
python server.py
```

Open the application in your browser.

---

## 💻 How to Use

1. Start the Flask server.
2. Open the frontend.
3. Select a location.
4. Enter total square feet.
5. Choose BHK.
6. Choose bathrooms.
7. Click **Estimate Price**.
8. View the predicted house price.



## 📚 Skills Demonstrated

- Machine Learning
- Data Preprocessing
- Feature Engineering
- Regression
- Model Deployment
- REST API Development
- Flask
- Frontend Development
- Git & GitHub

---

## 🔮 Future Improvements

- Deploy the application online
- Improve prediction accuracy
- Add more ML algorithms
- Interactive charts and analytics
- User authentication
- Database integration

---

## 👩‍💻 Author

**Riya Sharma**

BCA Student | Aspiring AI Engineer

GitHub:
https://github.com/riyasharma76-ux



---

⭐ If you found this project useful, consider giving it a Star.
