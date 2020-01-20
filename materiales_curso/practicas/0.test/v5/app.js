var Vehiculo;
(function (Vehiculo) {
    Vehiculo[Vehiculo["Coche"] = 0] = "Coche";
    Vehiculo[Vehiculo["Camion"] = 1] = "Camion";
    Vehiculo[Vehiculo["Bus"] = 2] = "Bus";
})(Vehiculo || (Vehiculo = {}));
var miVehiculo = Vehiculo.Camion;
console.log(miVehiculo); // 1
var otroVehiculo = Vehiculo[1];
console.log(otroVehiculo); // Camion
var otroVehiculo2 = Vehiculo.Coche;
console.log(otroVehiculo2); // Coche?
