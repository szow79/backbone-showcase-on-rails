class ShowsController < ApplicationController
  before_action :set_show, only: [:update, :destroy, :show]

  def index
    @shows = Show.all
    render json: @shows
  end

  def show
    render json: @show
  end

  def create
    @show = Show.new(strong_params)
    if @show.save
      render json: @show, status: :created, location: @show
    else
      err
    end
  end

  def update
    p params
    if @show.update(strong_params)
      head :no_content
    else
      err
    end
  end

  def destroy
    @show.destroy
    head :no_content
  end

  private
    def set_show
      @show = Show.find(params[:id])
    end

    def strong_params
      params.permit(:coverImage, :title, :genre, :stars)
    end

    def err
      render json: @show.errors, status: :unprocessable_entity
    end

end
