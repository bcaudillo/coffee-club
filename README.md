## Rails/React Project: Coffee Club

### Installation 
1. Open your terminal or comand prompt. 
2. Clone the project from the GitHub repository:
    ```
    $ git clone git@github.com:bcaudillo/coffee-club.git
    ```
3. Navigate project directory, and run the following command line to start the front end:
        ```
        $ cd coffee-club
        ```
4. To start the front end run the following command: 

        ```
       $ npm start --prefix client
       ```
 
    This runs the app in the development mode.\
    Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

5. To start the server on the backend, execute the following command:

    ```
    $ rails s
    ```

    To start the Rails server. Open [http://localhost:3000/coffee](http://localhost:3000/coffee) to see a display of the coffees with their reviews from the browser from the backend.


 6. To install the necessary packages and dependencies: 
 
    `bundle install`
 
 

 ## Usage
 As a logged in user:
    - You have access to a complete list of coffess supplied by the community. 
    - You'll be able to [add] or [edit] a coffee that no one has already submitted. 
    - You can leave comments with the ability to edit and remove your own.

 ### Login/Signup

 Log in with credentials or sign up using a password. 

 ### Logout
 This feature will log you out, deleting your session in the process. 

 ### See list 
 See a complete list of the coffees supplied by the community. Here you will be able to:
 -  See a list of the communities contributions, along with comments from other users. 
 - Submit one comment with the ability to edit your entry.
        - If a user wishes to make a change to their previous post all they have to do is type another entry and the previous comment will be replaced. 
- Remove a comment you've posted. 
- Remove a coffe you've posted.
 
 ### Add your own blend
Supply a unique coffee name along with coffee notes and origin of where the beans are from. 


### Edit your entries
Here you will be able to edit a coffee that you've submitted. 
