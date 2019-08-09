# Answers

- [ ] What are the required parts of class components?

Needs to extend the React.Component class. Needs a constructor if it is going
to be holding state. Needs call to super() if you want access to the class
methods. Needs a render call.

- [ ] Name at least three lifecycle methods?

componentDidMount, componentWillMount, componentDidUpdate

- [ ] Why are forms used so often in web applications and software?

Allows us to take in and store data from the user to validate their info, create
user objects, and many other things needed to provide the user with a personalized
experience.

- [ ] What advantages are there by using a forms library like Formik?

Allows us to make more complex forms quickly. It handles values for us, lets
us add in form validation, and gives us access to a number of different tools
to make our forms look more polished.

- [ ] Why do we write tests for our apps?

The main benefit is that it provides us with a clearer picture of how the app
is supposed to work, so that if changes need to be made to it later on, we can
see what we might be breaking if we break anything and also we can tweek things
about our components before running expensive tests on the actual DOM.