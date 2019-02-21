class AuthorsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        author = Author.create(author_params)
        if author.valid?
            render json: author, status: 201
        else
            render json: author.errors, status: 403
        end
    end
    
    def author_params
        params.require(:author).permit(:name, :genre, books_attributes: [:name])
    end
end
