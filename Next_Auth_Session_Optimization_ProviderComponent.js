  ############## Next Auth Session Provider Component ############
			
			When we Reload a specific page after logging in we have to check 
			wheather the user is already logged in or not
			
			## useSession() hook will automaticcaly sent a session cookie 
			to verify wheatherthe user is logged in or not 
			but we dont needd it coz we already did a custom validation on a aspecific page
			
			
			#### But We can avaoid the useSession automaitc session validation#####
			
			
			import 
			1=> Go to the _app.js
			
			########Syntax
			
			import { Provider } from "next-auth/client";

            function MyApp({ Component, pageProps }) {
                  return (
                     <Provider session={pageProps.session}>
                          <Layout>
                         <Component {...pageProps} />
                          </Layout>
                     </Provider>
                          );
                      }
					  
					  
		   By Doing this We can maintain some performance optimization
		   by avaoiding useSession validation check for some pages where we already made a 
		   custom validation with getServerSideProps()
