# Food Order App [Demo version](https://auth-45c01.web.app/home)

## General information

the current version of this app was made as a MVP version, it only allows the user right now of creating an account and ordering meals, in the next update, the app will show a user information and orders, and will provide a payment method.

## App Workflow

from homepage, the user can navigate throughout this app to three main parts:

### `Authentication Page`

in this page a user can sign up for a new account, then he/she will be automatically signed in for the first time.


![image](https://user-images.githubusercontent.com/62679874/134992764-b172b9c9-8b1f-438e-842f-790a5f0ed08f.png)

for the user's next visit, he/she can just switch to the sign in form and sign in to the app.
a real firebase authentication system is provided on this proccess. so invalid emails, weak passwords, or empty fields will be rejected.

![image](https://user-images.githubusercontent.com/62679874/134993635-0f719ada-1fe1-4084-8cab-08d9e5236586.png)


test account :
email: test@test.com
password: 123456

the user can still navigate to the food order page, add meals to his/her cart and goes to cart page as a guest without having an account. 

### `Meals Page`

here the user can choose meals randomly or per category, and add them to the shopping cart, the shopping cart icon constantly shows the total amount of meals.

![image](https://user-images.githubusercontent.com/62679874/134995017-1af22c0a-f826-4c43-b444-1e7b053bcf5f.png)

### `Cart Page`

in this page the user can see and manage the cart before placing order, adding and removing a certain item from the order is available easily in this page.
The total cost of the order is shown in the button down there, it's also instantly up to date according to user's cart changes.

![image](https://user-images.githubusercontent.com/62679874/134995993-71459db2-3d89-460a-b415-692b5dc17cb9.png)

by clicking on "Go to checkout" button a form will appear for the user to complete the order.

## `Built with`

* React.js
* Firebase authentication
* Firebase realtime database
* Spoonacular api  

## `Folder structure`

```bash
📦src
 ┣ 📂assets
 ┃ ┣ 📜background1.jpg
 ┃ ┗ 📜background2.jpg
 ┣ 📂components                          # contains the child components
 ┃ ┣ 📜BackDrop.js
 ┃ ┣ 📜BackDrop.module.css
 ┃ ┣ 📜CartItem.js
 ┃ ┣ 📜CartItem.module.css
 ┃ ┣ 📜Checkout.js
 ┃ ┣ 📜Checkout.module.css
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Header.module.css
 ┃ ┣ 📜HeaderCartButton.js
 ┃ ┣ 📜HeaderCartButton.module.css
 ┃ ┣ 📜Input.js
 ┃ ┣ 📜MealItem.js
 ┃ ┣ 📜MealItemForm.js
 ┃ ┣ 📜MealItemForm.module.css
 ┃ ┣ 📜RegForm.js
 ┃ ┣ 📜RegForm.module.css
 ┃ ┗ 📜SignInForm.js
 ┣ 📂hooks                                # contains the custom hooks
 ┃ ┗ 📜useFetch.js
 ┣ 📂pages                                # contains the main components of each page
 ┃ ┣ 📜Auth.js
 ┃ ┣ 📜Auth.module.css
 ┃ ┣ 📜AvailableMeals.js
 ┃ ┣ 📜AvailableMeals.module.css
 ┃ ┣ 📜AvailableMeals0.js
 ┃ ┣ 📜Cart.js
 ┃ ┣ 📜Cart.module.css
 ┃ ┣ 📜Construction.js
 ┃ ┣ 📜Home.js
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜NotFound.js
 ┣ 📂store                               # contains contexts logic and providers
 ┃ ┣ 📜AuthContext.js
 ┃ ┣ 📜AuthProvider.js
 ┃ ┣ 📜CartContext.js
 ┃ ┗ 📜CartProvider.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js

```

## `Run it locally`

in order to run this app on your local machine you need to do the following: 
* clone this repository to your device 
* make sure your cli on the root path of the repo and run ``` npm install ```
* run ``` npm start ```

