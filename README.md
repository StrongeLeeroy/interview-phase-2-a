# Enverus Coding Interview - T&R Phase 2 - Model A

This README file includes the intructions and rules required to complete the challenges presented during the interview.

Please, refer to this focument in case of doubt.

# Rules
- You may use any IDE you are comfortable with. (e.g. WebStorm, Visual Studio Code, Atom, etc.)
- You may use Google or API documentation sites if needed.
- You may ask the interviewer for guidance or explanations at any time.

# Exercises
A final result of the application can be found at the following URL for context: [https://strongeleeroy.github.io/interview-phase-2-a/](https://strongeleeroy.github.io/interview-phase-2-a/)


## EXERCISE 1
- Create a new **post preview component** that will display a post title, body and author ID.
- Use this new component to replace the hardcoded posts in the home-page.component.

## EXERCISE 2
- Update the posts property of the home-page.component to use the post API instead of hardcoded posts (blog.service.ts).
- Use the new dynamic post array instead of the hardcoded posts in the template.

## EXERCISE 3
- Create a new route: `/post/POST_ID` that will display a single post and it's comments. (comment body and email are enough)
- There is an existing component **PostPageComponent** that you can use.
- The post-preview.component title should be changed to link to it's post page using the post ID.
    - For example, clicking on the title of post ID 5 should take us to /post/5
- This page should use the route params to fetch a given post using the BlogService as well as it's comments.

## EXERCISE 4
- Update the home-page.component and post-page.component to use the NGRX store instead of the Blog service.
  - The actions, selectors, effects and reducer have already been coded and are available in the +state forlder for reference.
  - You will need to implement the action dispatch and selector assignment logic.
  - The components will need to be updated to use the store instead of the service.

## EXERCISE 5
- Update the NGRX store (reducer, actions, effects and selectors) to fetch the post author from the API, then update post-page.component to display the author name and email.
