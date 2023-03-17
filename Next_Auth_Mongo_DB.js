	##############################
			#############  Next AUTH #####################
			
			
			NextAuth.js is a complete open-source authentication solution for Next.js applications. 
        It is designed from the ground up to support Next.js and Serverless

	Pros : 

        1=> it provides both server and client side validations! 
        2=> it also provvides auth tokens for validations
	3=> It will also provides you JWT Tokens

	Cons :

        1=> But it will not create a user for us we have to come up with our own logic !

		   
		   ######### Syntax #########
		   
		   
		   export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      //  authorize method is called when it recives an incomming login request
      async authorize(credentials) {
        // We are checking with our datase base
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();

          throw new Error("No User Found");
        }

        // It returns a Boolean
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could Not Log You in ");
        }

        //  We return a object if everytihng is ok and then we encode
        //this in JSON web token
        client.close();
        return {
          email: user.email,
        };
      },
    }),
  ],
});
