class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

  before_action :authorized
  before_action :planner_auth

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def planner_auth
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session[:user_role] == "Planner"
  end
   
  def authorized
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_record_not_found_response(exception)
    render json: { errors: exception }, status: :not_found
  end

end
