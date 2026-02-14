'use strict'; 

const wallet = {
    naterial : 'cuero',
    color : 'cafe',
    precio : 1.50,
    esNueva : true

}

alert ('El color de la billetera es '+ wallet.color);

const newcars = [1,2,3];
const vehiculos = [
    {anio : 2022, matricula: 'BTB-4578',propietario: 'Jimmy Perez',cilidraje:2.5},
    {anio : 2025, matricula: 'ABC-4833',propietario: 'Leo Caldas',cilidraje:5.2},
    {anio : 2023, matricula: 'AFC-4887',propietario: 'Juan Luis Torres', cilidraje:1.0}
];

// ()  => {}
vehiculos.forEach((item)=>{
    alert (item.propietario)
});

// filtrat vehiculos con el mayor 1.0 cilindraje
//
const vhiculosPq = vehiculos.filter ()

const vehiculos = [
    {marca:'honda',cilindraje: 1.5, puertas: 5,matricula:'LBB0143',propietario: 'MARCELO'},
    {marca:'ford',cilindraje: 2.5, puertas: 5,matricula:'AB2543',propietario:  'ADRIAN'},
    {marca:'mitsubushi',cilindraje: 1, puertas: 3,matricula:'GQ0143',propietario: 'KEVIN'},

]
vehiculos.forEach((vehiculo) => {
  alert(' pertenece a ' + vehiculo.propietario );
});

//filtral los mayores cilindrajes 
const vehiculospequenos= vehiculos.filter (vehiculos => vehiculos.cilindraje < 2);

vehiculospequenos.forEach((vehiculos)=> {
    alert ('los vehiculos de menor cilindraje son' + vehiculos.propietario );
});