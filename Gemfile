source 'https://rubygems.org'
ruby '2.3.1'

gem 'rails', '~> 5.0.0'
gem 'pg', '~> 0.18'
gem 'puma'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'

gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'redis', '~> 3.0'

gem 'sinatra', github: 'sinatra/sinatra' # to delete after sidekiq fix dependencies

gem 'devise'
gem 'active_model_serializers'
gem 'ember-cli-rails', github: 'thoughtbot/ember-cli-rails', branch: 'sd-rails-5'

gem 'sidekiq', github: 'mperham/sidekiq', branch: 'rails5'
gem 'sidekiq-scheduler'

gem 'rack-cors', require: 'rack/cors'

group :development, :test do
  gem 'byebug'
  gem 'pry-byebug'
end

group :development do
  gem 'web-console', '~> 3.0'
  gem 'spring'
  gem 'hirb'
  gem 'bullet'
  gem 'letter_opener'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'rails_12factor', group: :production
