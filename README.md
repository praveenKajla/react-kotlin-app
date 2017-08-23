# springBoot-kotlin-react-demo-app
A simple User List Movies and TvSHows application using SpringBoot+Kotlin+ReactJs

--------------------------------------------------------------------------------------



## Developing

The Kotlin code is available in the `src` Directory.
The `frontend` sub-project contains the ReactJs+Webpack application.


## Running the backend 

From the main directory run 

`gradlew build`. or `./gradlew build` if self bat file doesn't run

It would build the jar file in build/libs folder.
So Now run 

`java  -jar build/libs/random-1.0-SNAPSHOT.jar`.

Our backend is running at http://localhost:8090

## Running the frontend 

**You will need npm and yarn to run the dev server and build the project**

`cd frontend`.
SImply run 

In Developement Mode
`npm run start`.

In Production Mode
`npm run serve`.

Head Over to http://localhost:8080 

Note : Do install Dependencies :)


### Hot reloading

Only in developement mode i.e. `yarn run start`.
With the dev server running, saving your javascript files or stylus assets will automatically trigger the hot reloading
(without browser refresh) of the application.


### Databse 
h2 databse is used  so if mylist shows no movies populate it by adding movies by searching 
your favourites in ADD MOVIE /ADD TV modal

You can  add, delete and update
