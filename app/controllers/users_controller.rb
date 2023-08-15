class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    skip_before_action :planner_auth

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        session[:user_role] = user.role
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def edit_profile
      current_user.update!(user_params)
      render json: current_user, status: :accepted
    end

    # def set_avatar
    #     byebug
    #     if params[:avatar]
    #       begin
    #         @current_user.avatar.attach(params[:avatar])
    #         @current_user.save
    #         render json: @current_user, serializer: UserSerializer, status: :ok
    #       rescue StandardError => e
    #         render json: { errors: ["Avatar upload failed: #{e.message}"] }, status: :internal_server_error
    #       end
    #     else
    #       render json: { errors: 'No avatar file provided' }, status: :unprocessable_entity
    #     end
    # end

    private

    def user_params
        params.permit(:email, :name, :password, :password_confirmation, :image, :bio, :avatar, :id, :role, :phone_number, :instagram_handle, :pinterest_profile, :pronouns, :location)
    end
end
