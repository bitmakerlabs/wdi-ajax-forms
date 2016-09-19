class GreetingsController < ApplicationController

  def index
    @greetings = Greeting.all.order("created_at desc")
    @greeting = Greeting.new
  end

  def create
    @greeting = Greeting.new(greeting_params)
    @greeting.save
    respond_to do |format|
      format.json { render json: @greeting.to_json }
    end
  end

  private 

  def greeting_params
    params.require(:greeting).permit(:note)
  end

end
