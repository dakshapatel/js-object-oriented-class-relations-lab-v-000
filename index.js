let store = { drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver{
    constructor(name){
        this.name = name;
        this.id = driverId++;
        store.drivers.push(this);
    }

    trips(){
        // driver has many trips
        return store.trips.filter(trip => {
            return trip.driverId = this.id;
        });
    }
    
    passengers(){
        // has many passengers through trips
        return this.trips().map(trip => {
            return trip.passenger();
        });  
    }
} 

class Passenger{
    constructor(name){
        this.name = name;
        this.id = passengerId++;
        store.passengers.push(this);
    }

    trips(){
        // has many trips
        return store.trips.filter(trip =>{
            return trip.passengerId == this.id;
        });
    }

    drivers(){
        // has many drivers through trips
        return this.trips().map(trip =>{
            return trip.driver();
        });
    }
}

class Trip{
    constructor(driver, passenger){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = tripId++
        store.trips.push(this);
    }
    driver(){
        // belongs to a driver
        return store.drivers.find(driver => {
            return driver.id === this.driverId;
        });
    }

    passenger(){
        // belongs to a passenger
        return store.passengers.find(passenger =>{
            return passenger.id === this.passengerId;
        });
    }
}