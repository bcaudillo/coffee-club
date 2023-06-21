require 'faker'


puts "🌱 Seeding spices..."

# Seed your database here
coffee = Faker::Coffee
hipster = Faker::Hipster
4.times{Coffee.create(name: coffee.blend_name, origin: coffee.origin, notes: coffee.notes, user_id: 69 )}

# review = Review.create([user_id: 62, comment: "a;sdlkfj", coffee_id: 107, username: 'a']) 
# 4.times{Review.create(user_id: 62, comment: hipster.sentence, coffee_id: 105,username: 'a')}
# 4.times{Review.create(user_id:62, comment: hipster.sentence, coffee_id: 105, username:'a')}
# 4.times{Review.create(user_id:62, comment: hipster.sentence, coffee_id: 106, username: 'a')}


puts "✅ Done seeding!"

