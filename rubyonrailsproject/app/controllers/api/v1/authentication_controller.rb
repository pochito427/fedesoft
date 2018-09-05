module Api
    module V1
      class AuthenticationController < ApiApplicationController

        def authenticate_user
            if User.find_for_database_authentication(email: params[:email]).present?
                user = User.find_for_database_authentication(email: params[:email])
                if user.valid_password?(params[:password])
                    render json: payload(user)
                else
                    render json: {errors: ['Password invalido' ]}, status: :unauthorized
                end
            else
                render json: {errors: ['Usuario invalido']}, status: :unauthorized
            end
        end

        private
        def payload(user)
        return nil unless user and user.id
            {
                auth_token: JsonWebToken.encode({user_id: user.id}),
                user: {id: user.id, email: user.email, name: user.name}
            }
        end


      end
    end
end
