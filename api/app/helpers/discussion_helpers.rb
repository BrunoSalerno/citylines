module DiscussionHelpers
  def get_messages_for_city(city_id)
    DiscussionMessage.where(city_id: city_id).order(:created_at).all.map do |msg|
      {
        id: msg.id,
        content: msg.content,
        author_nickname: msg.user.nickname,
        author_url: msg.user.relative_url,
        timestamp: msg.created_at,
      }
    end
  end
end
