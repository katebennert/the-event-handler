puts 'Seeding 🌱'

    # Seed users
    user1 = User.create!(
        role: "Client",
        name: "Jane Smith",
        email: "john@example.com",
        password: "devpassword",
        pronouns: "she/her",
        location: "New York"
    )
    
    user2 = User.create!(
        role: "Planner",
        name: "Ryan Andrew",
        email: "jane@example.com",
        password: "devpassword",
        pronouns: "he/him",
        location: "San Francisco"
    )
    
    # Seed venues
    venue1 = Venue.create!(
        name: "Seacrest Elegant Ballroom",
        seated_guest_capacity: 200,
        venue_type: "Ballroom",
        venue_setting: "Formal",
        avg_cost: 5000,
        address: "123 Main St, New York",
        about: "A beautiful ballroom for weddings and events."
    )
    
    venue2 = Venue.create!(
        name: "Rustic Barn",
        seated_guest_capacity: 150,
        venue_type: "Barn",
        venue_setting: "Rustic",
        avg_cost: 3000,
        address: "456 Oak Ave, San Francisco",
        about: "A charming barn venue for rustic weddings."
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
