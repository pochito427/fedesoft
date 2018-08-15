json.extract! post, :id, :title, :body, :author, :publication_date, :?-no-test-framework, :created_at, :updated_at
json.url post_url(post, format: :json)
