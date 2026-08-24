import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "./style.css"


var map = new L.map("map", {
    center: [18.802808, 98.950170],
    zoom: 15
})

var osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'xx'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var OpenStreetMap_DE = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var marker1 = new L.marker([18.802808, 98.950170]).bindPopup("คณะสังคมศาสตร์")
var marker2 = new L.marker([18.802832, 98.949974]).bindPopup("ตึกSB1")
var marker3 = new L.marker([18.803849, 98.948197]).bindPopup("อ่างตาด")
var marker4 = new L.marker([18.801594, 98.947479]).bindPopup("แมสคอม")

var roadGeom = [
    [18.80268524996863, 98.95141818448442],
    [18.803848661291884, 98.94909673611515]
]
var line = new L.polyline([roadGeom], { color: "red" })

var angGeom = [
    [18.80785067774143, 98.95072996612193],
    [18.807576212681653, 98.95128796766855],
    [18.806276241268808, 98.95123432349904],
    [18.805382505111925, 98.9502687282731],
    [18.806672327357838, 98.94875596243655],
    [18.80785067774143, 98.95072996612193]
]

var angkaew = new L.polygon(angGeom, { color: "blue", fillcolor: "lightblue" })

var amphoe = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_amphoe_4326",
    format: "image/png",
    transparent: true
})

var village = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_village_4326",
    format: "image/png",
    transparent: true
})

var trans = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_trans_4326",
    format: "image/png",
    transparent: true
})

var landuse = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_landuse_4326",
    format: "image/png",
    transparent: true
})

var angtadGeom = [
    [18.804107196049156, 98.94786773403729],
    [18.80402101784086, 98.94851258080654],
    [18.80322386732193, 98.94848223507623],
    [18.802706794695876, 98.94816360490788],
    [18.803274138186943, 98.94778428327892],
    [18.803877387395644, 98.9473518566219],
    [18.80419337421329, 98.94707874504904],
    [18.804107196049156, 98.94786773403729]
]

var angtad = new L.polygon(angtadGeom, { color: "blue", fillcolor: "lightblue" })


var baseMap = {
    "Esri_WorldImagery": Esri_WorldImagery.addTo(map),
    "osm": osm,
    "OpenTopoMap": OpenTopoMap.addTo(map),
    "OpenStreetMap_DE": OpenStreetMap_DE.addTo(map)
}

var overlay = {
    "การใช้ประโยชน์ที่ดิน": landuse,
    "marker1": marker1.addTo(map),
    "marker2": marker2.addTo(map),
    "marker3": marker3.addTo(map),
    "marker4": marker4.addTo(map),
    "ถนน": line,
    "อ่างแก้ว": angkaew,
    "อำเภอ": amphoe,
    "หมู่บ้าน": village,
    "การคมนาคม": trans,
    "อ่างตาด": angtad
}

L.control.layers(baseMap, overlay).addTo(map)


map.on("click", (e) => {
    console.log(e.latlng)
    document.getElementById("lat").innerHTML = e.latlng.lat
    document.getElementById("lng").innerHTML = e.latlng.lng
})