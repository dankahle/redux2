## redux2

A comparison between straight angular 4 and angular 4 on redux. My first foray into redux was an uncomfortable experience. Redux is orthogonal to angular in many respects. It was hard to discern what enterprise angular would look like as opposed to angular/redux (my first enterprise angular 4 app). This was an attempt to see the two side-by-side and how redux could be done better. In the end, I chose straight angular. The redux style global state pub/sub is easily accomplished with much less complexity using BehaviorSubjects/Subjects in a global service (see [contacts-fe](https://github.com/dankahle/contacts-fe)). The immutability enforcement for redo capability (which by the way requires even more code) is overkill when you're not considering redo functionality, and once again: easily accomplished outside of redux. I see great benefits in app-wide state management for UI coordination, just that this can easily be accomplished with observables while maintaining the inherent angular functionality, instead of fighting it at every turn. Nothing wrong with 2-way data binding at all.


This is a comparison on a small scale between angular and angular/redux. There's 3 branches: angular-version, redux-version, and redux-no-epics. The redux-no-epics branch was an attempt to tame redux into something not so orthogonal to angular. It loses the epics, which were the most painful part and limits the actions to all synchronous, simplifying the code dramatically. If it had to do redux (thankfully I don't), I'd do it like this, it's the best of both worlds: state management with more locallized code. In the end, my [contacts-fe](https://github.com/dankahle/contacts-fe) site rolls it's own global service pub/sub state management just fine, with much less hooplah.  

1. git clone https://github.com/dankahle/redux2.git
2. switch to branch "redux-version" // has all the packages
3. npm install (i.e. get to the version branch, then "npm install")
4. run "node ./rest-api/server.js" to get a server running on port 3005
5. in root directory: "ng serve" to start the app which will be found at http://localhost:4200
6. from here you can change branches to compare, though may be best to stop ng-serve and start again after switching branches

####to compare:  
Clone project into 3 separate directories, then have 3 separate webstorm projects so you can just jump between them instead of changing branches

  
