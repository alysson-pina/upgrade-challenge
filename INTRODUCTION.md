INTRODUCTION.md file to explain the different concepts explored within your implementation and why you decided to implement things the way they are, just keep in mind that the goal is to help guide the person that is going to be reviewing your code so try to make it clear and concise

# Considerations
## Routing
Lib used: react-router v6

Reasons:
-- standard for SPAs with client-side routing
-- small bundle size

## State management
Lib used: zustand

Reasons:
- We need to gather user data from multiple screens and place it in a one source of truth.

- minimal boilerplate

- optmized re-renders with state update reactivity

### Performance
I'm pre-fetching the call to GET /api/colors earlier on home page,  to avoid waiting for it to resolve when user lands on the 2nd screen.

## Form validation
I have decided to take advantage of form validation that HTML offers natively.
With that said, screens with user data input are powered with HTML forms and basic validation rules.

## Security considerations
It's not safe to send password in plain text format.
Since the connection with the server is not over HTTPS, I decided to hash the user password before sending it.
Although it's not enough to be vulnerable-safe, this is less-risky.
Note: It will require backend to re-hash it

## Added one extra route: /terms
Added this route to render terms and conditions page.

## Further improvements
### Security
Migrate to HTTPS as we are sending user sensitive data.

### Improve UX
Work with design team to improve UX for this application.
Ideas:
- improve a11y by adding labels to input and select fields
- display error with toast message instead of routing to error page when error occurs during submit.

### Scalability
As project grows more complex, we can handle those improvements: 
- atomic structure for components
- think of code splitting to load routes async and reduce bundle size 

