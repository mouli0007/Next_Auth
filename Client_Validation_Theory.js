
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
	  
	  import { useSession } from "next-auth/client";

	  
	  #### Syntax #####
	  
	    const [session, loading] = useSession();

			With conditional rendering we can able to manage our state depends on uor session
