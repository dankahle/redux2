## redux2

this is a comparison on a small scale between angular and angular/redux. The two branches are angular-version and redux-version

1. git clone https://github.com/dankahle/redux2.git
2. switch to branch "redux-version" // has all the packages
3. npm install (i.e. get to the version branch, then "npm install")
4. run "node ./rest-api/server.js" to get a server running on port 3005
5. in root directory: "ng serve" to start the app which will be found at http://localhost:4200
6. from here you can change branches to compare, though may be best to stop ng-serve and start again after switching branches

####to compare:  
probably easier to just clone into 3 separate directories, then have 3 separate webstorm projects so you can just jump between them instead of changing branches

  
###### 8/28/17
both redux-version and angular-version are complete. 
Starting redux-no-epics version next which will drop epics, using services instead, and only sync reducer actions. This will simplify things considerably, yet still yield a state driven app, possibly the best of both worlds.
