// Metric
var input_mm = getElement("unit_mm");
var input_cm = getElement("unit_cm");
var input_m = getElement("unit_m");
var input_km = getElement("unit_km");

//Imperial
var input_in = getElement("unit_in");
var input_ft = getElement("unit_ft");
var input_ya = getElement("unit_ya");
var input_mi = getElement("unit_mi");

//Source
var input_src = getElement("unit_src");

input_m.value = 10.0;
onMetersChange();

function getElement(id) {
    return document.getElementById(id);
}

// Metric
function onMillimetersChange() {
    let mm = input_mm.value;

    input_cm.value = mm * 0.1;
    input_m.value = mm * 0.001;
    input_km.value = mm / 1000000;

    input_src.value = mm * 0.0393701;
    impFromSrc();
}
function onCentimetersChange() {
    let cm = input_cm.value;

    input_mm.value = cm * 10;
    input_m.value = cm * 0.01;
    input_km.value = cm / 100000;

    input_src.value = cm * 0.393701;
    impFromSrc();
}
function onMetersChange() {
    let m = input_m.value;

    input_mm.value = m * 1000;
    input_cm.value = m * 100;
    input_km.value = m * 0.001;

    input_src.value = m * 39.3701;
    impFromSrc();
}
function onKilometersChange() {
    let km = input_km.value;

    input_m.value = km * 1000;
    input_cm.value = km * 100000;
    input_mm.value = km * 1000000;

    input_src.value = km * 39370.1;
    impFromSrc();

}

//Imperial
function onInchesChange() {
    let inch = input_in.value;

    input_ft.value = inch / 12;
    input_ya.value = inch / 36;
    input_mi.value = inch / 63360;

    input_src.value = inch;
    metFromSrc();
}
function onFeetChange() {
    let ft = input_ft.value;

    input_in.value = ft * 12;
    input_ya.value = ft / 3;
    input_mi.value = ft / 5280;

    input_src.value = input_in.value;
    metFromSrc();
}
function onYardsChange() {
    let ya = input_ya.value;

    input_in.value = ya * 36;
    input_ft.value = ya * 3;
    input_mi.value = ya / 1760;

    input_src.value = input_in.value;
    metFromSrc();
}
function onMilesChange() {
    let mi = input_mi.value;

    input_in.value = mi * 63360;
    input_ft.value = mi * 5280;
    input_ya.value = mi * 1760;

    input_src.value = input_in.value;
    metFromSrc();
}

//Imperial
function impFromSrc() {
    let units = input_src.value;

    input_in.value = units;
    input_ft.value = units / 12;
    input_ya.value = units / 36;
    input_mi.value = units / 63360;
}
function metFromSrc() {
    let units = input_src.value;

    input_mm.value = units / 0.0393701;
    input_cm.value = units / 0.393701;
    input_m.value = units / 39.3701;
    input_km.value = units / 39370.1;
}

//Source
function onUnitsChange() {
    impFromSrc();
    metFromSrc();
}