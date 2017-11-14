# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create({
    title: "Taxi Driver",
    description: "the big boy cleans the streets",
    rating: 0
  })

Movie.create({
    title: "The Third Murder",
    description: "Number 3",
    rating: 0
  })

Movie.create({
    title: "Blade Runner 2049",
    description: "not good",
    rating: 0
  })
