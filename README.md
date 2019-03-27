# Recap 1

The goals of this exercise is to create a photo application with React and consolidate some of the foundational concepts you've seen so far. 


## Exercise

- [x] Choose your photo-like api:
  - [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/)
  - [Rick & Morty](https://rickandmortyapi.com/)
- [x] Create your app using `create-react-app`
- [x] There should be a page that displays a list of photos in the following path `/photos`
- [x] There should be a page that displays a single photo in the following path `/photos/:id`
- [x] When the user clicks on a photo in `/photos` the app should take the user to `/photos/:id`

### Notes

This is not a master detail page. It's more simple than the Messenger app.

To fetch photos use [http://jsonplaceholder.typicode.com/photos?\_limit=30](http://jsonplaceholder.typicode.com/photos?_limit=30).
Don't forget the `_limit=30` parameter at the end of the query or it will be slow.

To fetch a single photo use [http://jsonplaceholder.typicode.com/photos/<PHOTO_ID>](http://jsonplaceholder.typicode.com/photos/3)

Use `react-router` v4 for the routing:

```
npm install --save react-router-dom
```

## Core learning objectives to be consolidated 

- Componentization, folder structure and thinking in React
  - Think about the structure of your application, do the files mirror your component tree?
  - What about applying a pattern that we saw earlier to separate UI and logic?
- Data fetching
  - Where should we do our data fetching in a React App?
  - Remember to look at the [fetch docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Routing
  - Remember, in react we need to install [react-router](https://reacttraining.com/react-router/)
  - You'll need to implement at least 2 routes, where should you declare these routes?

## Bonus

- [x] Add some style with [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/) or [http://material-ui.com/](http://material-ui.com/)
- [ ] Using this endpoint [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts), create a page that displays a list of posts in the following path: [http://localhost:3000/posts](http://localhost:3000/posts)
- [ ] Add a form at the top of the page to add a new post. This url [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts) also accepts the verb "POST" to add a new post
- [ ] If you use the Rick & Morty API, you can add a [filter](https://rickandmortyapi.com/documentation/#filter-characters) of the characters list
- [ ] You can specify a NOT_FOUND route in the Root of your app. (`<Route component={NotFound} />`)
- [x] Deploy to `gh-pages` or [https://www.netlify.com/](https://www.netlify.com/)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
