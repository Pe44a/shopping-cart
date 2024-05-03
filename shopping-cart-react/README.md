# Shopping Cart Component

Shopping website that allows users to view items, add those items in a cart, see the total price, and proceed to checkout.

Check out website here: https://shopping-cart-beta-ecru.vercel.app/

## Features

-Displays the items in the cart, including the product image, title, category, price, and quantity
-Shows an empty cart message with a link to the shop page if the cart is empty
-Provides a "Checkout" button to complete the purchase
-Clears the cart data from local storage upon successful checkout

## Dependencies

React
react-router-dom
Vite

## Data Storage

The component uses the browser's local storage to persist the cart data. The cart items are stored under the key 'itemData' in JSON format. The data is retrieved and parsed when the component mounts and is updated whenever the checkout is completed.
