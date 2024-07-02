Website Name: DrawnToArt

Category's Name : Painting and Drawing

Live Site URL: https://assignment-no-10-drawntoart.netlify.app/

client-side :-  https://github.com/MdSaifulIslamRafsan/-DrawnToArt-client-side



## Overview

This repository contains the backend server-side codebase for DawntoArt, a website dedicated to sharing and discovering painting and drawing-related content. Users can contribute by adding new artworks, modifying existing entries, and deleting their own contributions. MongoDB is used for data storage.

## Installation

- Clone the Repository:

```sh
git clone https://github.com/MdSaifulIslamRafsan/-DrawnToArt-server-side.git
cd -DrawnToArt-server-side
```

- Install Dependencies:

```sh
npm install
```

- Set Up Environment Variables:
  
Create a .env file in the root directory with the following variables:

```sh
# MongoDB Configuration
DB_USER=your_database_username
DB_PASSWORD=your_database_password


```
- Start the Development Server:

```sh
nodemon index.js
```

# Features:-

- Add: Logged-in users can easily contribute to add new painting and drawing-related content to the website

- Delete: Users possess the capability to remove their own contributed content 

- Update: Users have the flexibility to modify existing painting and drawing-related data, enabling them to refine artwork details, amend comments, or update profile information.



## Technologies Used
- Frontend: React , tailwind
- Backend: Express
- Database: MongoDB
- Hosting & Authentication: Firebase
