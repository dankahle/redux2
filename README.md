## redux2

This is a small comparison app to analyze an application done in angular, angular/redux, and angular/redux minus epics. The 3 branches are:

angular-version  
redux-version  
redux-no-epics


#### getting started 

1. git clone https://github.com/dankahle/redux2.git
2. switch to branch "redux-version" // has all the packages
3. npm install
4. run "node rest-api/server.js" to get a server running on port 3005
5. pick a branch and run ng serve to serve on localhost:4200


#### to compare:  
clone into 3 separate directories, then have 3 separate webstorm projects so you can just jump between them instead of changing branches. Use only one to run the app and restart "ng serve" between branch changes. Or, serve on different ports "ng serve --port xxxx" then all could share the same api that you run from one app


#### my findings

angular-version:  
I first coded the app in angular. It was by far the simplest most understandable code.

redux-version:  
The conversion of the already implemented angular app to redux was not fun. The initialization took me 2.5 hours, and this was after I had already had it implemented and working. The other components were fairly straight forward, just tedious and properties had to be added to state for you to know when the async work was done, stupid, but the only way for a component to know when the work is done via an epic.

redux-no-epics:  
I got to thinking about redux, and one of the things that bothers me the most is the epics. The normal easy service call obsevables are lost to you, your business logic is no longer in your service but up on some epic. You're stuck setting some property (userLoaded) to watch to see if the epic is done with its async work. What if you tossed the epics and just used service calls instead? All actions would be synchronous then (the action call line will update state), and you're back to waiting on observables again (much easier to understand and deal with). That's the gist of redux-no-epics. Also, I got rid of the action noise, i.e. stuff I didn't want clutering up the action stream like putting up an ajax progress bar, but I leave in the errorModal so you can see the error message comming back from the api. The only advantage I see to this redux stuff is: debugging. So emphasize that side of it. I also reduce the state to only what's needed in there. Another thing to note: a lot of my actions in this version "have no reducer case", i.e. they're there only to let you know an event happened, but they don't change state, so they're not in the reducer switch. I found this to be lighter as well.

#### summary  
I don't care for the redux stuff, the angular code is much lighter and easier to work with. There's a productivity loss there, but it can be minimized by getting rid of the epics and focusing on only actions and state required, not throwing in the kitchen sink, which seems to be what we've been doing so far. In ng1 we could debug just fine, we had access to all services (a backdoor of ours) and scopes. In ngx we have none of that? If so, maybe this redux thing is really needed. How else to debug this code if we can't see inside components and services? If this is true, I vote for the no-epics version. This is easier to work with and minimizes the productivity loss associated with classic redux. I was gonna follow up with my vote, which of course would be straight angular, but that debugging thing kinda threw me for a loop. We've been able to see inside services and scopes in ng1. What in reality can we see in ngx? That's something I need to look into.  
  
  




