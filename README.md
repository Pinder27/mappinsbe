# Map-Pins - https://map-pins.pinderhub.in
## Project - Map-Pins
Map-Pins is a dynamic location-based application that empowers users to mark and save locations of interest
on a map, complete with personalized titles and descriptions.
it is divided in two repos for frontend and backend.

frontend repo - https://github.com/Pinder27/mappinsfe

## How To Use - 
1. first login or signup so that locations could be saved when ever you come back
2. just double click on any location on the map to add a pin , a popup window asking for title and description will appear enter title and description click on save
3. you can also click on location icon on top right corner to move to your current location.

## Tech stack and libraries used -
1. React for frontend
2. Mapbox for implementing maps
3. JWT for authentication
4. Bcrypt for password hashing
5. Express for backend
6. Mongodb database
7. AWS EC2 for deployment
# To run project locally - 
1. clone the both the forntend-https://github.com/Pinder27/mappinsfe  and backend-https://github.com/Pinder27/mappinsbe in a single folder and install dependencies for both
2. add .env file in mappinsfe repo and add REACT_APP_MAPBOX variable containing your mapbox token which you can get by signing on to https://www.mapbox.com/
3. add .env file in mappinsbe repo and add MONGO_URL variable containing your monogodb url
4. start your frontend and backend by npm start command by running it separately in both repos.
