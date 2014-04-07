APP_FILE  = 'app.rb'
APP_CLASS = 'MarkdownTutorial'

require 'sinatra/assetpack/rake'

task :clean do
  `rm -rf public/`
end

task :build  => [:clean, :'assetpack:build'] do
  FileUtils.cp("favicon.ico", "public/favicon.ico")
end
