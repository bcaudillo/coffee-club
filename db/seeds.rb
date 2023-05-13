require 'faker'


puts "🌱 Seeding spices..."

# Seed your database here
coffee = Faker::Coffee
4.times{Coffee.create(name: coffee.blend_name, origin: coffee.origin, notes: coffee.notes )}
# 10.times{Beer.create(brands:Faker::Beer.brand, name: Faker::Beer.name)}
user = User.create([{ username: 'Star Wars' }, { password: 'Lord of the Rings' },{password_confirmation: 'asdlfj'}])
user = User.create([{ username: 'Stsdfsdar Wars' }, { password: 'sdfhe Rings' },{password_confirmation: 'asdlfj'}])
user = User.create([{ username: 'Star Wasdfdssdfsrs' }, { password: 'Lord of the Ringasdfsds' },{password_confirmation: 'asdlfsdfds'}])


puts "✅ Done seeding!"
