class CommentsController < ApplicationController

    skip_before_action :planner_auth

    def create
        comment = current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = comment.find_by(id: params[:id])
        if comment.user_id == current_user.id
            comment.update!(comment_params)
            render json: comment, status: :accepted
        else 
            render json: { errors: ["Not Authorized to update this comment"] }, status: :unauthorized
        end
    end

    def destroy
        comment = current_user.comments.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else 
            head :no_content, status: :unauthorized
        end
    end

    private

    def comment_params
        params.permit(:body, :event_id)
    end
end
