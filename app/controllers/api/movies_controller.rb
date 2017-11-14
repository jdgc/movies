class Api::MoviesController < ApplicationController

  def show
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update_attributes(movie_params)
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :description, :rating)
  end

end
