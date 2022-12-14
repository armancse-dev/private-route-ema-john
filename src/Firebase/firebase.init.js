import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthentication = () => {
   initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
--------------------------
Initial Setup
1. Firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable Auth Method
----------------
step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login & Register

-------------------
Setp: 3 set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. Return necessary methods and states from useFirebase

-------------------
Setp: 4 create auth context hook (useAuth)
1. Create a auth context
2. create a context provider
3. set context provider context value
4. use Auth provider
5. create useAuth Hook


------------------
Step 5: create private route
1. create private route
2. set private route

-------------------
step-6: Redirect after login
1. after login redirect user to their desired destination

*/
