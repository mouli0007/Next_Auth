

############### Next Auth client Side Validation ################

import { signIn } from "next-auth/client";


### Syntax ###

      // It will always resolves a promise
      const result = await signIn("credentials", {
	  
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
	  
	  From the Sign in function the request will send automatically to the nextAuth handler (backend)
	  with the given credentials
	  

#####################################################################
	  
	  ! important note :  Next_auth will automatically provised cookies (session token ) aka (JWT) 
                    and it helps in changing the state (ex: When the user logs in provides validation for that ) and also 
					helps when we try to send request to protected resource
					
	 ###### import { useSession } from "next-auth/client"; 
	  
     ### UseSession Hook can be used in any functional react component
	 
	 
	  #### Syntax #####
	  
	    const [session, loading] = useSession();

			With conditional rendering we can able to manage our state depends on uor session
			
			
	##### import { signOut} from "next-auth/client"; 
	
	### SingOut Funciton will automatically Clears the Logged in client cookie(active session token cookie)
	    But You can Still login with the user credentials 
		the signout function will just clear the active session cookie so that we can do any kind
		of conditional rendering if the cookie is presented or id its not
