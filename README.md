<br/>
<p align="center">
    <a href="https://the-event-handler.onrender.com/" target="_blank">
        <img width="50%" src="https://i.imgur.com/FohAorm.png?1" alt="UpFed logo">
    </a>
</p>

# EventHandler

EventHandler is a web application built using React for the frontend, a Rails API for the backend, and PostgreSQL database. The app is designed for two different types of users (Planners and Clients) to interact with each other and a common event. Planners have enhanced permissions that allow them to manage events and associated details. The app's primary purpose is to facilitate planning large high-caliber events by providing a platform for seamless communication and easy access to event information. EventHandler was created with small event planning businesses in mind to make a job with so many moving pieces a little less complicated.

[Watch a video demo of EventHandler.](https://www.loom.com/share/20efed7cf8b84cc1b3e95eab96ccc9e3?sid=ce27b095-0948-406b-94fd-dae5ab5791b6)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Technologies](#technologies)
- [Future Versions](#future-versions)
- [License](#license)

## Overview
EventHandler simplifies event management by providing a central platform for clients and planners to collaborate effectively. Clients can access event details, communicate with their planners through comments, and stay informed about event updates. Planners can manage multiple events, interact with clients, and make event-related decisions based on real-time communication.

## Features
- **User Roles:** The app distinguishes between Clients and Planners, each having distinct levels of access and permissions.
- **Event Management:** Planners can create, edit, and manage events, while clients can view event details and make comments.
- **Communication:** Clients and planners can communicate seamlessly through event-specific comments.
- **Venue Exploration:** Both clients and planners can access a list of all available venues in the app's database as well as detailed venue information.
- **Client-Planner Interaction:** Planners can view information related to their clients and associated events.
- **Event Details:** Clients can access comprehensive event information, including date, budget, guest count, and more.

## Usage
1. **User Registration and Authentication:** Users can sign up as either a Client or a Planner and log in with their credentials.
2. **Event Creation and Management:** Planners can create new events, specifying event details such as name, date, budget, and more.
3. **Event Details:** Clients can access event-specific details and stay informed about the event's progress and status.
4. **Client-Planner Communication:** Both clients and planners can communicate effectively through event-specific comments.
5. **Venue Exploration:** Users can explore a comprehensive list of venues available in the app's database and specifics about each venue.
6. **Client-Planner Interaction:** Planners can access information about their events and associated clients and venues.

## Installation
1. Clone the repository to your local machine.
2. Run `bundle install` to install backend dependencies.
3. Set up the PostgreSQL database and run migrations using `rails db:create`, `rails db:migrate`, and `rails db:seed`.
4. Start the Rails server using `rails s`.
5. Navigate to the `client` directory and run `npm install` to install frontend dependencies. (Or from the project directory run `npm install --prefix client`)
6. Start the React development server using `npm start`. (Or from the project directory run `npm start --prefix client`)

## Technologies
- **Frontend:** React, React Router
- **Backend:** Ruby on Rails API
- **Database:** PostgreSQL
- **Styling:** Custom CSS

## Future Versions
- **Venue User Type:** Venue reps can create a page for their venue in our database and interact with planners on the details of an event at their venue.
- **Google Drive/Maps/Calendar Integration:** The Event details page will serve as a home for document storage, calendar events, and custom maps.
- **Websocket Notifications:** EventHandler will be able to send push and in-app notifications to users.

## License
This project is licensed under the [MIT License](LICENSE).
