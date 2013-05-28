require 'sinatra' 

class MarkdownTutorial < Sinatra::Application

  get "/" do
    erb :index
  end

  get '/lesson/:number' do  
    erb :"lesson#{params[:number]}", :locals => {:number => params[:number]}
	end  

  helpers do
    def title(number = nil)
      title = "Markdown Tutorial"
      # helper for formatting your title string
      if number
        title + " | Lesson #{number}"
      else
        title
      end
    end
  end
end
