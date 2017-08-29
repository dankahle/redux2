## redux2

this is a comparison on a small scale between angular and angular/redux. The two branches are angular-version and redux-version

1. git clone https://github.com/dankahle/redux2.git
2. switch to branch "redux-version" // has all the packages
3. npm install
4. run "node rest-api/server.js" to get a server running on port 3005
5. pick a branch and run ng serve to serve on localhost:4200

#### to compare:  
probably easier to just clone into 3 separate directories, then have 3 separate webstorm projects so you can just jump between them instead of changing branches. Use only one to run the app and restart "ng serve" between branch changes. Or, serve on different ports "ng serve --port xxxx" then all could share the same api that you run from one app

  
###### 8/28/17
both redux-version and angular-version are complete. 
Working on redux-no-epics version:
* drop all epics in favor of async service calls
* all actions are sync reducer only actions
* reduce action noise, say take out ajax progress bar actions
* reduce state to only necessary and debug values

this last branch might be the middle ground that will yield a state driven app, while minimizing the productivity loss associated with classic redux.

