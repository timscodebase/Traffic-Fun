import TrafficLight from './traffic_light';

class TrafficLightController {
  private lights: TrafficLight[];
  private timers: { [id: string]: NodeJS.Timeout } = {};

  constructor(lights: TrafficLight[]) {
    this.lights = lights;
  }

  startAll() {
    this.lights.forEach(light => {
      this.startLight(light);
    });
  }

  private startLight(light: TrafficLight) {
    const id = this.getLightId(light);
    if (this.timers[id]) {
      clearTimeout(this.timers[id]);
    }
    
    this.timers[id] = setTimeout(() => {
      light.changeState();
      console.log(`Light ${id} changed to ${light.getColor()}`);
      this.startLight(light); // Restart the cycle for this light
    }, light.getTimingForCurrentState());
  }

  private getLightId(light: TrafficLight): string {
    // Here you could use a unique identifier if each light had one
    return this.lights.indexOf(light).toString();
  }

  stopAll() {
    Object.values(this.timers).forEach(clearTimeout);
    this.timers = {};
  }
}

export default TrafficLightController;