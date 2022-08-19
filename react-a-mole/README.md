App - Stores the score state variable
MoleContainer
This will be the component that decides which child component is rendered. We will store a Boolean state variable called displayMole here.

Mole
This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. This component will render when displayMole === true

EmptySlot
This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false

After deciding on the components, we must plan the type of functionality for each.

App
A function to generate nine MoleContainers
MoleContainer
A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
A ternary that will determine which child to render
Mole and EmptySlot
A useEffect hook that will start the timer and clean it up afterward
Now that we have planned everything we need, it may be helpful to draw a diagram to represent the component structure. Identify where state variables are instantiated and compare that to where functions are located. Where will state need to be passed down?
