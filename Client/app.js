function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");

    for (let i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return i + 1;
        }
    }
    return -1;
}


function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");

    for (let i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return i + 1;
        }
    }
    return -1;
}


function onClickedEstimatePrice() {

    console.log("Estimate button clicked");

    const sqft = document.getElementById("uiSqft");
    const bhk = getBHKValue();
    const bathrooms = getBathValue();
    const location = document.getElementById("uiLocations");
    const estPrice = document.getElementById("uiEstimatedPrice");


    const url = "https://bangalore-house-prediction-1.onrender.com/predict_home_price";


    $.post(url, {

        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value

    }, function(data, status) {

        console.log(data);
        console.log(status);

        estPrice.innerHTML =
            "<h2>Rs. " + data.estimated_price + " Lakhs</h2>";

    }).fail(function(xhr) {

        console.log(xhr.responseText);

    });

}



function onPageLoad() {

    console.log("loaded document");


    const url = "https://bangalore-house-prediction-1.onrender.com/get_location_names";


    $.get(url, function(data, status) {

        console.log(data);


        if (data) {

            $('#uiLocations').empty();


            for (let i = 0; i < data.locations.length; i++) {

                var opt = new Option(data.locations[i]);

                $('#uiLocations').append(opt);

            }
        }

    });

}


window.onload = onPageLoad;
