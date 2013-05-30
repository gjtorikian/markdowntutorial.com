APP_FILE  = 'app.rb'
APP_CLASS = 'MarkdownTutorial'

require 'sinatra/assetpack/rake'

task :clean do
  `rm -rf public/`
end

task :build  => [:clean, :'assetpack:build']
