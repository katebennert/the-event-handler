puts 'Seeding 🌱'

    #destroy_all

    Comment.destroy_all
    Event.destroy_all
    Venue.destroy_all
    User.destroy_all

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
        location: "San Francisco",
        image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        instagram_handle: "ryanandrews",
        pinterest_profile: "ryan_andrews",
        phone_number: "415-555-2132",
        pinned_photos: ["https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", "https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"]
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
        guest_num: 150,
        cover_image: "https://images.unsplash.com/photo-1529608757696-e18a2c0d0d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    )
    
    event2 = Event.create!(
        client: user1,
        planner: user2,
        venue: venue2,
        name: "Company Anniversary Party",
        budget: 5000,
        date: DateTime.new(2023, 9, 20, 18, 0),
        event_type: "Corporate",
        guest_num: 100,
        cover_image: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    )
    
    # Seed comments

    # Jack and Emily's Wedding
    comment1 = Comment.create!(
        body: "Looking forward to the big day! Can we up the guest count to 200?",
        user: user1,
        event: event1
    )

    comment2 = Comment.create!(
        body: "Of course!",
        user: user2,
        event: event1
    )

    comment2 = Comment.create!(
        body: "Thanks Ryan!! 🙏",
        user: user1,
        event: event1
    )
    
    # Company Anniversary Party
    comment4 = Comment.create!(
        body: "This venue is perfect for our event!",
        user: user2,
        event: event2
    )
  
puts 'Seeding complete! ✅'
