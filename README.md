<h1 align="left">Spirii FE test Code Challenge</h1>

###

<p align="left">The application uses React and Tailwind CSS to display a list of locations with "real-time" updates (mocked).<br><br>Performance Considerations: To handle potentially thousands of locations, the application implements pagination. Initially, it fetches only 10 locations per page (can be more) to avoid overwhelming the backend and improve front-end performance. As the user scrolls, new data is loaded dynamically when they reach the bottom of the list. <br>> Need future development when having more time: add a button to load more data.<br><br>Efficient Data Fetching: The getLocationData function is used to fetch location data from a mock service. It supports filtering by name and status, optimizing the query to only fetch relevant results.<br><br><br><br>Summary from requirements:<br><br>- The list in reality can contain thousands of locations, implement functionality in a way that considers performance and avoids unnecessary requests to the backend:<br><br>To avoid frequent call to the API with large amount of data, we can consider caching data and keep track of already fetched data and re-use it if the same search query or filter is used again.<br><br><br><br>✨ Discussions:<br>- Consider how you would implement real-time status updates for location availability:<br><br>the react app should always be ready to handle the what should be passed from backend real time. Ideally can use websocket. "useState" and "useEffect" can be used for example, to store locations, and set up connections...<br>since we will be handling a large list of locations, could be nice to use batch updates. There should also be considered with frequent updates on locations (if that is the case), can be less prioritized if there is not frequent update.<br>Or we can consider cron job with fluxcd to update location in a * minute base.</p>

###

<h2 align="left">Code Related thoughts and discussions</h2>

###

<p align="left">1. Component layer: UI components are built: location Item, location list.<br>2. Service layer: it is for location service to get location data, which acts as a data-fetching layer of the application. it can be later replaced with the actual API calls from the location microservice.<br>3. Logic layer: it manages states like loading, location data shows...<br>4. If there is more time, Tailwind CSS should be used more accurate with proper designs. <br> For the project, tests are needed: Unit test for each component and function, E2E test to ensure that the application works as a whole.</p>

###

<h2 align="left"></h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
</div>

###
