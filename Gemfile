source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.3.3'

gem 'rails', '5.0.1'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'puma', '~> 3.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.5'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'bootstrap-sass'
gem "sanitize"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'sqlite3'
  gem 'rspec-rails', '~> 3.4'
  gem 'factory_girl_rails', '~> 4.5'
  gem 'capybara', '~> 2.5'
  gem 'guard'
  gem 'guard-rspec'
  # Add two gems below along with install of phantomjs to run headless JS testing
  # gem 'poltergeist'
  # gem 'phantomjs', :require => 'phantomjs/poltergeist'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'shoulda-matchers', '~> 3.0', require: false
  gem 'database_cleaner', '~> 1.5'
  gem 'faker', '~> 1.6.1'
  gem 'simplecov', :require => false
end

group :production do
  gem 'pg'
end


gem 'react-rails'