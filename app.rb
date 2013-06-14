require 'sinatra/base'
require 'sinatra/assetpack'
require 'redcarpet'
require 'sass'

class MarkdownTutorial < Sinatra::Base
  set :root, File.dirname(__FILE__)
  register Sinatra::AssetPack

  # "Thin is a supremely better performing web server so do please use it!"
  set :server, %w[thin webrick]

  assets {
    js :app, [
      '/js/*.js'
    ]

    css :application, [
      '/css/*.css'
    ]

    js_compression :closure, :level => "SIMPLE_OPTIMIZATIONS"
    css_compression :sass
  }

  # trim trailing slashes
  before do
    @page_count = 0
    @is_conclusion = false
    request.path_info.sub! %r{/$}, ''
  end

  not_found do
    markdown :notfound, :locals => {:force => false}
  end

  # for all markdown files, keep using layout.erb
  set :markdown, :layout_engine => :erb

  get "/" do
    markdown :index
  end

  get "/conclusion" do
    @is_conclusion = true
    markdown :conclusion
  end

  get '/lesson/:number' do
    erb :"lesson#{params[:number]}"
  end

  helpers do
    def title(number=nil)
      title = "Learn Markdown"

      # helper for formatting your title string
      if number
        title + " | Lesson #{number}"
      else
        title
      end
    end

    # Draws a blank circle in the nav bar for every other page
    def current_page_icon(force=false)
      @page_count += 1
      if @page_count == params[:number].to_i || (force and @is_conclusion)
        ""
      else
        "-blank"
      end
    end
  end
end
