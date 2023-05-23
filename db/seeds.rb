require 'faker'


puts "🌱 Seeding spices..."

# Seed your database here
coffee = Faker::Coffee
hipster = Faker::Hipster
4.times{Coffee.create(name: coffee.blend_name, origin: coffee.origin, notes: coffee.notes )}
# 10.times{Beer.create(brands:Faker::Beer.brand, name: Faker::Beer.name)}

review = Review.create([user_id: 54, comment: "a;sdlkfj", coffee_id: 17, rating: 73, username: 'a']) 
4.times{Review.create(user_id:55, comment: hipster.sentence, rating: 3, coffee_id: 74,username: 'b')}
4.times{Review.create(user_id:55, comment: hipster.sentence, rating: 4, coffee_id: 75, username:'b')}
4.times{Review.create(user_id:56, comment: hipster.sentence, rating: 3, coffee_id: 76, username: 'c')}


puts "✅ Done seeding!"

