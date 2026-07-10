import json
import pickle
import numpy as np

__locations = None
__data_columns = None
__model = None


def load_saved_artifacts():

    global __data_columns
    global __locations
    global __model

    print("loading artifacts...")

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]


    with open("./artifacts/banglore_home_prices_model.pickle", "rb") as f:
        __model = pickle.load(f)

    print("loading artifacts...done")


def get_location_names():
    print("Locations:", __locations)
    return __locations
