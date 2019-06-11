Rails.application.routes.draw do
namespace :api do
  resources :bars do
    resources :menus
   end
  end
  resources :menus do
    resources :items
  end
end
