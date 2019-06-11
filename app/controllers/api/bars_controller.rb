class Api::BarsController < ApplicationController

  def index
    render json: Bar.all 
  end

  def create
    bar = Bar.new(bar_params)
    if bar.save
      render json: bar
    else
      render json: { errors: bar.errors }, status: :unprocessable_entity
    end
  end

  def update 
    bar = Bar.find(params[:id])
    bar.update()
    render json: bar
  end

  def destroy
    Bar.find(params[:id]).destroy
    render json: { message: 'Bar Destroyed'}
  end

  private

  def bar_params
    params.require(:bar).permit(:title)
  end



end
