# TastyGram
### A New Take on Recipe Websites
---

### Overview
TastyGram is a scrolling focused site, similar to Instagram and other popular social media platforms, that focuses on recipes. The site was built using **React, Sass, Express, MongoDB, and Node.js**.

The app has full **CRUD** functionality for users that are logged in. A logged-in user may add new posts and edit or delete their own posts. Any visitor to the site can view posts in the main feed and in a show page, but they do not have authorization to make any changes to the posts. Authentication / authorization is achieved with **Google Firebase**. 

The frontend site consists of several page components, including main feed, create, edit / delete, dashboard, and about the developers sections. 

On the backend, the app communicates with a **MongoDB** database to perform CRUD functions on the individual documents via Post, Put, and Delete routing. 

The app was built out using a mobile-first strategy to ensure that it looks great on any device. 

---

### Technologies Used
- React
- Sass
- MongoDB
- Express
- Node.js
- Javascript
- Mongoose
- Postman

---

### Screenshots

**Landing Page - Desktop**

[![Screen-Shot-2022-01-12-at-11-17-58-PM.png](https://i.postimg.cc/fRdS95nD/Screen-Shot-2022-01-12-at-11-17-58-PM.png)](https://postimg.cc/k2n5rQgp)

---

**Show Page - Desktop**

[![Screen-Shot-2022-01-12-at-11-20-07-PM.png](https://i.postimg.cc/sxtDfd2S/Screen-Shot-2022-01-12-at-11-20-07-PM.png)](https://postimg.cc/q6xdQFyM)

---

**Shopping Cart - Mobile**

[![guitar-shop-2340-herokuapp-com-users-cart-i-Phone-X.png](https://i.postimg.cc/WzrtkbCS/guitar-shop-2340-herokuapp-com-users-cart-i-Phone-X.png)](https://postimg.cc/QK8XLsXW)

---

**Guitar Category - Mobile**

[![guitar-shop-2340-herokuapp-com-product-category-guitar-i-Phone-X-1.png](https://i.postimg.cc/8C55bbx7/guitar-shop-2340-herokuapp-com-product-category-guitar-i-Phone-X-1.png)](https://postimg.cc/fVGDzYzs)

---

### Getting Started
The majority of the page can be visited without logging in. However, due to some of the routing, you will need to sign in to see all of the features of the page. 

You do **not** need to enter your email address if you do not want to. You can do one of two things if you choose not to enter your email: 

1. You can use *email*: test@test.com and *password*: 1234
    If you choose to use this email, please be aware there may already be items in the cart.
2.  You may make up an email, since there is no validation requirement to enter the site. 

To see the deployed site, please visit: **https://guitar-shop-2340.herokuapp.com/**

---

### Future Improvements
Bind admin rights to certain profiles and populate the nav bar with direct routes to the 'new products' and 'edit products' pages of the site when those admin profiles are signed in.

Change the home icon to a hamburger icon that populates a full-page menu over the current page on mobile and drop-down menus on the desktop version of the site.