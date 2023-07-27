puts 'Seeding 🌱'

    10.times do
        venue = Venue.create({
            name: "The Fancy Venue",
            seated_guest_capacity: 50-200,
            venue_type: "Ballroom",
            venue_setting: "Inside",
            avg_cost: 20000,
            address: "222 Wedding Lane, Moonachie, NJ 07302",
            about: "This is a sentence about this venue."
        })
    end

puts 'Seeding complete! ✅'
