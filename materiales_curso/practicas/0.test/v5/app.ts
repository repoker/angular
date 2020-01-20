enum Vehiculo { Coche, Camion, Bus }

let miVehiculo: Vehiculo = Vehiculo.Camion;
console.log(miVehiculo); // 1

let otroVehiculo: string = Vehiculo[1];
console.log(otroVehiculo); // Camion

let otroVehiculo2: string = Vehiculo.Coche;
console.log(otroVehiculo2); // Coche? No compila.