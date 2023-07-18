class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :blends



  #no need for digest, maybe blends
end


