class ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :coverImage, :genre, :stars
end
