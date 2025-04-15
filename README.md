# WebStore_Project
# Simple Web Store Demo

## Description

This project is a single-page HTML demonstration of a basic web store front-end. It showcases product display, an interactive shopping cart modal, and uses Tailwind CSS for styling. All functionality (HTML, CSS, JavaScript) is contained within a single HTML file.

## Features

* **Product Display:** Shows a responsive grid of products featuring:
    * Image (dynamically loaded from `source.unsplash.com` based on keywords)
    * Product Name
    * Brief Description
    * Price
* **Shopping Cart:**
    * Items can be added via "Add to Cart" buttons on product cards.
    * A modal dialog displays the cart contents, accessible via the "Cart" link in the header.
    * Cart items show name, price, and quantity.
    * Quantity can be increased, decreased, or items removed directly within the modal.
    * Calculates and displays the total price of items in the cart.
    * Cart count badge in the header updates automatically (shows total quantity of items).
    * Modal can be closed using the 'X' button or by clicking the overlay.
    * "Proceed to Checkout" button (currently non-functional, closes the modal).
* **User Interface:**
    * Header with navigation links (Home, Products, Cart, Contact) and a non-functional search bar.
    * Visually appealing Hero section.
    * Notifications appear briefly at the bottom when items are added or removed from the cart.
    * Smooth scrolling for internal page links (like the "Shop Now" button).
    * Responsive design suitable for various screen sizes, styled with Tailwind CSS.
    * Uses the "Inter" font.

## Technologies Used

* **HTML5:** For structuring the web page.
* **CSS3:**
    * **Tailwind CSS:** (Loaded via CDN) Used extensively for utility-first styling and layout.
    * Minimal custom CSS for specific elements like the notification animation and modal transitions.
* **JavaScript (Vanilla):** For all client-side interactivity, including:
    * Cart state management (adding, removing, updating quantities).
    * Rendering cart items dynamically in the modal.
    * Handling button clicks and UI updates (modal visibility, notifications, cart count).
    * Smooth scrolling.

## How to Run

1.  Save the code from the `web_store_page` artifact as an HTML file (e.g., `webstore.html`).
2.  Open the `webstore.html` file directly in any modern web browser.
    * An internet connection is required to load Tailwind CSS, the Inter font, and the product images from Unsplash.

## Potential Future Improvements

* **Implement Search:** Make the search bar functional to filter products.
* **Checkout Process:** Add a proper checkout flow (e.g., form for user details, integration with a payment gateway - requires backend).
* **Cart Persistence:** Use `localStorage` or `sessionStorage` to keep cart items even after the page is refreshed.
* **Product Detail Pages:** Link product cards to individual pages with more details.
* **Image Handling:** Use locally hosted or more reliable Content Delivery Network (CDN) images instead of relying solely on potentially changing Unsplash Source URLs.
* **Backend Integration:** Connect the front-end to a backend server for managing products, orders, and user accounts.
* **Accessibility:** Further review and enhance accessibility features (ARIA attributes, keyboard navigation).
