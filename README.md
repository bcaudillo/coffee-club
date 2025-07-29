# Coffee Club

## Project Overview

Coffee Club is a full-stack web application designed to be a community-driven platform for coffee enthusiasts. Users can explore a comprehensive list of community-contributed coffee blends, add their own unique coffee entries, and engage with others by leaving and managing reviews.

This application is built with a **Ruby on Rails** backend for robust API services and a **React.js** frontend for a dynamic and interactive user experience.

## Features

As a logged-in user, you can:

* **Browse Community Contributions:** Access a complete, community-curated list of coffee blends.
* **View Detailed Coffee Information:** See details for each coffee, including notes, origin, and user reviews.
* **Manage Your Own Coffee Blends:**
    * **Add New Blends:** Submit unique coffee names along with tasting notes and bean origin.
    * **Edit Your Blends:** Modify details of coffee entries you have previously submitted.
    * **Remove Your Blends:** Delete coffee entries you have posted.
* **Interact with Reviews:**
    * **Leave Reviews:** Submit comments/reviews on any coffee.
    * **Edit Your Reviews:** Update your own submitted comments. *(Note: Current implementation replaces the previous comment when a new one is typed.)*
    * **Remove Your Reviews:** Delete comments you have posted.
* **User Authentication:** Securely log in with existing credentials or sign up for a new account.
* **Session Management:** Log out to securely end your session.

## Technologies Used

**Backend:**
* Ruby on Rails (API Mode)
* Database:
* 
**Frontend:**
* React.js
* npm (Node Package Manager)

## Installation & Setup

Follow these steps to get Coffee Club up and running on your local machine.

### Prerequisites

* Node.js (LTS version recommended) & npm
* Ruby (version compatible with your Rails application, e.g., `3.x.x`)
* Bundler gem: `gem install bundler`
* [Your database client, e.g., PostgreSQL client if using PostgreSQL]

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone git@github.com:bcaudillo/coffee-club.git
    cd coffee-club
    ```

2.  **Install Backend Dependencies:**
    Navigate to the root of the project and install the Ruby gems.
    ```bash
    bundle install
    ```

3.  **Database Setup (Backend):**
    Set up your database and run migrations.
    ```bash
    rails db:create
    rails db:migrate
    # If you have seed data:
    # rails db:seed
    ```

4.  **Start the Backend Server:**
    Run the Rails server. The API will typically be accessible at `http://localhost:3000`.
    ```bash
    rails s
    ```
    *(You can verify the backend is running by visiting `http://localhost:3000/coffee` in your browser to see the coffee data.)*

5.  **Install Frontend Dependencies:**
    Navigate into the `client` directory and install its Node.js packages.
    ```bash
    cd client
    npm install
    ```

6.  **Start the Frontend Application:**
    From the `client` directory, start the React development server. The frontend will typically be accessible at `http://localhost:4000`.
    ```bash
    npm start
    ```
    *(Alternatively, from the project root, you can run `npm start --prefix client`)*

7.  **Access the Application:**
    Open your web browser and navigate to:
    * **Frontend:** `http://localhost:4000`
    * **Backend API (for direct access/testing):** `http://localhost:3000`

## Usage Guide

### Authentication
* **Login/Signup:** Use the provided interface to log in with existing credentials or create a new account.
* **Logout:** Click the logout option to securely end your session.

### Browsing Coffees
* On the main page, you'll see a complete list of coffees contributed by the community.
* Click on a coffee to view its details, including tasting notes, origin, and user reviews.

### Managing Your Contributions
* **Adding a New Blend:** Navigate to the "Add" section (or equivalent) and provide a unique coffee name, notes, and origin.
* **Editing Your Coffee/Reviews:** Access the edit functionality for your submitted coffees or reviews.
    * For reviews: Simply type a new entry where your previous comment was, and it will be updated.
* **Removing Your Coffee/Reviews:** Use the delete option associated with your entries.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the [Specify your license, e.g., MIT License] - see the `LICENSE` file for details.
