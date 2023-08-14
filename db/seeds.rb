puts 'Seeding 🌱'

    # Seed users
    user1 = User.create!(
        role: "Client",
        name: "Jane Smith",
        email: "jane@example.com",
        password: "devpassword",
        pronouns: "she/her",
        location: "New York"
    )
    
    user2 = User.create!(
        role: "Planner",
        name: "Ryan Andrews",
        email: "ryan@example.com",
        password: "devpassword",
        pronouns: "he/him",
        location: "San Francisco"
    )

    user3 = User.create!(
        role: "Client",
        name: "Kate B.",
        email: "kate@example.com",
        password: "devpassword",
        pronouns: "she/her",
        location: "Jersey City"
    )
    
    # Seed venues
    venue1 = Venue.create!(
        name: "Seacrest Elegant Ballroom",
        seated_guest_capacity: 200,
        venue_type: "Ballroom",
        venue_setting: "Formal",
        avg_cost: 5000,
        address: "123 Main St, New York",
        about: "A beautiful ballroom for weddings and events.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80"
    )
    
    venue2 = Venue.create!(
        name: "Rustic Barn",
        seated_guest_capacity: 150,
        venue_type: "Barn",
        venue_setting: "Rustic",
        avg_cost: 3000,
        address: "456 Oak Ave, San Francisco",
        about: "A charming barn venue for rustic weddings.",
        image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
    )

    venue3 = Venue.create!(
        name: "Lakeside Bliss",
        seated_guest_capacity: 100,
        venue_type: "Outdoor Wedding",
        venue_setting: "Lakeside Outside",
        avg_cost: 5000,
        address: "456 Lake Dr, Lake Placid",
        about: "A breathtaking lake view for outside weddings.",
        image: "https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
    )

    venue3 = Venue.create!(
        name: "Egret's Nest at Bayou Barn",
        seated_guest_capacity: 200,
        venue_type: "Outdoor",
        venue_setting: "Bayou Lake Side",
        avg_cost: 3000,
        address: "456 Bayou Lm, Lafayette",
        about: "A great covered outdoor venue with a stunning Louisianna backdrop.",
        image: "https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    )

    venue4 = Venue.create!(
        name: "River's Edge at Bayou Barn",
        seated_guest_capacity: 200,
        venue_type: "Outdoor",
        venue_setting: "Bayou Lake Side",
        avg_cost: 3000,
        address: "456 Bayou Lm, Lafayette",
        about: "A great covered open-air venue with a stunning Louisianna backdrop.",
        image: "https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    )
    
    # Seed events
    event1 = Event.create!(
        client: user1,
        planner: user2,
        venue: venue1,
        name: "Jack and Emily's Wedding",
        budget: 10000,
        date: DateTime.new(2023, 8, 15, 15, 30),
        event_type: "Wedding",
        guest_num: 150
    )
    
    event2 = Event.create!(
        client: user1,
        planner: user2,
        venue: venue2,
        name: "Company Anniversary Party",
        budget: 5000,
        date: DateTime.new(2023, 9, 20, 18, 0),
        event_type: "Corporate",
        guest_num: 100
    )
    
    # Seed comments
    comment1 = Comment.create!(
        body: "Looking forward to the big day!",
        user: user1,
        event: event1
    )
    
    comment2 = Comment.create!(
        body: "This venue is perfect for our event!",
        user: user2,
        event: event2
    )
  
puts 'Seeding complete! ✅'
