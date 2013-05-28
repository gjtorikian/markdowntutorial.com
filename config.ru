root = ::File.dirname(__FILE__)
require ::File.join( root, 'server' )

# Assuming your application is subclassed from Sinatra::Application
run MarkdownTutorial.new 