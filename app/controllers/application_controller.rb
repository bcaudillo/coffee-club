class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized


  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid

  def current_user
    user_id = session[:user_id]
    user = User.find_by(id: user_id)
    return user
  end

  def handle_invalid(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
  end

  def authorized
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
