import './style.css'
import TrafficLight, { TrafficLightState } from './traffic_light'
import TrafficLightController from './traffic_light_controller'

// Create some traffic lights with different timings
const light1 = new TrafficLight(TrafficLightState.Red, {
  [TrafficLightState.Red]: 8000,
  [TrafficLightState.Green]: 4000,
  [TrafficLightState.Yellow]: 2000
});

const light2 = new TrafficLight(TrafficLightState.Red, {
  [TrafficLightState.Red]: 10000,
  [TrafficLightState.Green]: 6000,
  [TrafficLightState.Yellow]: 3000
});

// Create a controller with these lights
const controller = new TrafficLightController([light1, light2]);

// Here you would have your TypeScript compiled to JavaScript, 
// or you can directly write JavaScript for this example:

document.addEventListener('DOMContentLoaded', () => {
  const light1Element = document.getElementById('light1');
  const light2Element = document.getElementById('light2');
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');

  // Assuming your TypeScript traffic light logic is here:
  const light1 = new TrafficLight(TrafficLightState.Red);
  const light2 = new TrafficLight(TrafficLightState.Red);
  const controller = new TrafficLightController([light1, light2]);

  // Function to update UI based on current light state
  function updateLightUI(lightElement, light) {
    const lights = lightElement.querySelectorAll('.light');
    lights.forEach(l => l.classList.remove('active'));
    lights[light.currentState].classList.add('active');
  }

  // Start lights
  startBtn?.addEventListener('click', () => {
    controller.startAll();
    setInterval(() => {
      updateLightUI(light1Element, light1);
      updateLightUI(light2Element, light2);
    }, 1000); // Check and update every second
  });

  // Stop lights
  stopBtn?.addEventListener('click', () => {
    controller.stopAll();
  });
});

// Start all lights
//controller.startAll();

// After some time, if you want to stop all lights
//controller.stopAll();