class PagesController < ApplicationController

  def home
    @first_movie_id = Movie.find_by_rating(0).id
  end

end
