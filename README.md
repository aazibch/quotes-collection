# QuotesCollection

A place to store and view your favorite quotes.

- Users can add quotes to the collection.
- Users can favorite/unfavorite quotes.
- Users can delete quotes.

## Demo

A live demo can be accessed at https://quotes-collection.up.railway.app/

## Details

To be able to access the quotes and related data throughout the app, I've used React's [Context API](https://reactjs.org/docs/context.html).

To render the modal in a semantic manner, I've made use of React's [Portals](https://reactjs.org/docs/portals.html).

## Scripts

Run the server in development:

    npm run start:dev

Run the server in production mode:

    npm start

Run the client in development mode:

    cd client
    npm start

Build the client for production:

    cd client
    npm build
