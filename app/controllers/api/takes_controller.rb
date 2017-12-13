class Api::TakesController < ApplicationController
  before_action :set_take, only: [:update, :destroy]
  
  def index
    render json: Take.all
  end

  def create
    take = Take.new(take_params)
    if take.save
      render json: take
    else
      render json: { errors: take.errors.full_messages.join(', ') }
    end
  end

  def update
    if @take.update(take_params)
      render json: @take
    else
      render json: { errors: take.errors.full_messages.join(', ') }
    end
  end

  def destroy
    @take.destroy
  end

  private
  
    def set_take
      @take = Take.find(params[:id])
    end
  
    def take_params
      params.require(:take).permit(
        :author,
        :body
      )
    end

end
