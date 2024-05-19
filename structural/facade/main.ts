class PlumbingSystem {
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
}

class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems() {
        this.electrical.setVoltage(220);
        this.electrical.turnOn();
        this.plumbing.setPressure(100);
        this.plumbing.turnOn();
    }

    public shutDown() {
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

const client = new House();
client.turnOnSystems();
client.shutDown();