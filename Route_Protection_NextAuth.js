##############################################################
		############ Next Auth Route Protection ###################
		
		
		1=> Select the pages where you want to make a protected routing
		
		
		#### Syntax ####
		
		############ USE Session #################			
	 ###### import { useSession } from "next-auth/client"; 
	 
	 const [session,loading] = useSession()
	 
	 ##### The Data in the session and loading will be changed if the data was fetched
	       or else the data will remian same
		   
		    if(loading){
	             return
	         }
	
	 
	 
	 ######### GET Session () ############
	 ### Example Use Case for Protected Routes for a specifi page
	 ##### import {getSession } from "next-auth/client";

		getSession()=> will send a new request and takes the latest session data
