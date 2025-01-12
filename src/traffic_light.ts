enum TrafficLightState {
  Red,
  Green,
  Yellow
}

class TrafficLight {
  private _currentState: TrafficLightState;
  private _timings: { [key in TrafficLightState]: number };

  constructor(initialState: TrafficLightState = TrafficLightState.Red, timings?: { [key in TrafficLightState]: number }) {
    this._currentState = initialState;
    this._timings = timings || {
      [TrafficLightState.Red]: 10000, // 10 seconds for red
      [TrafficLightState.Green]: 5000, // 5 seconds for green
      [TrafficLightState.Yellow]: 2000 // 2 seconds for yellow
    };
  }

  // Getter for the current state
  get currentState(): TrafficLightState {
    return this._currentState;
  }

  // Method to change the state
  changeState(): void {
    switch (this._currentState) {
      case TrafficLightState.Red:
        this._currentState = TrafficLightState.Green;
        break;
      case TrafficLightState.Green:
        this._currentState = TrafficLightState.Yellow;
        break;
      case TrafficLightState.Yellow:
        this._currentState = TrafficLightState.Red;
        break;
    }
  }

  // Method to get the color representation of the current state
  getColor(): string {
    switch (this._currentState) {
      case TrafficLightState.Red:
        return "Red";
      case TrafficLightState.Green:
        return "Green";
      case TrafficLightState.Yellow:
        return "Yellow";
    }
  }

  // Simulate the traffic light cycle
  cycle(): void {
    console.log(`Current light color: ${this.getColor()}`);
    this.changeState();
  }

  getTimingForCurrentState(): number {
    return this._timings[this._currentState];
  }
}

export default TrafficLight;
export { TrafficLightState };