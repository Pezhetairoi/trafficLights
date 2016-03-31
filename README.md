# trafficLights

- Download the zip file and extract it. 
- Run the project by open trafficLight.html or trafficLight-quick-demo.html in your web browser. 

According to the requirements, I assume the 5-minute interval includes the 30s switching from yellow to red. That is, Red --5mins--> Green --4min30s-->Yellow--30s--> Red.

trafficLight.html is the version that adheres to the requirements. I also created a quick version trafficLight-quick-demo.html for quick demo and testing purposes. The switch interval will be brought down to 10s with 2s buffer from yellow to red. That is, Red --10s--> Green --8s-->Yellow--2s--> Red.

- run.js contains the logics for light switching, tests.js has all the unit tests. Unit tests are only available for the quick version and are automatically executed when you run the project in the browser. You can see the test results below the traffic light animation.    
