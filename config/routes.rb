Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'about', to: 'pages#about'
  resources :signups
  get 'contact', to: 'signups#new'
  get 'thanks', to: 'pages#thanks'
  # Defines the root path route ("/")
  # root "articles#index"
  root 'pages#home'
end
