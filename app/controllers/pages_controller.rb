class PagesController < ApplicationController

  def home
    @first_movie_id = Movie.first.id
  end

end
