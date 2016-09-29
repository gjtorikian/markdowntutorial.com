require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'
require 'fileutils'

desc "Generate site"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
  FileUtils.mv('_site/404/index.html', '_site/404.html')
  FileUtils.touch '_site/.nojekyll'
end

desc "Generate and publish blog to gh-pages"
task :publish do
  # Ensure the gh-pages dir exists so we can generate into it.
  puts "Checking for gh-pages dir..."
  unless File.exist?("./gh-pages")
    puts "Creating gh-pages dir..."
    sh "git clone git@github.com:gjtorikian/markdowntutorial.com gh-pages"
  end

  # Ensure latest gh-pages branch history.
  Dir.chdir("gh-pages") do
    sh "git checkout gh-pages"
    sh "git pull origin gh-pages"
  end

  # Proceed to purge all files in case we removed a file in this release.
  puts "Cleaning gh-pages directory..."
  purge_exclude = %w[
    gh-pages/.
    gh-pages/..
    gh-pages/.git
    gh-pages/.gitignore
  ]
  FileList["gh-pages/{*,.*}"].exclude(*purge_exclude).each do |path|
    sh "rm -rf #{path}"
  end

  # Copy site to gh-pages dir.
  puts "Building site into gh-pages branch..."
  ENV['JEKYLL_ENV'] = 'production'
  require "jekyll"
  Jekyll::Commands::Build.process({
    "source"       => File.expand_path("."),
    "destination"  => File.expand_path("gh-pages"),
    "sass"         => { "style" => "compressed" }
  })

  FileUtils.mv('gh-pages/404/index.html', 'gh-pages/404.html')
  File.open('gh-pages/.nojekyll', 'wb') { |f| f.puts(":dog: food.") }

  # Commit and push.
  puts "Committing and pushing to GitHub Pages..."
  sha = `git rev-parse HEAD`.strip
  Dir.chdir('gh-pages') do
    sh "git add ."
    sh "git commit --allow-empty -m 'Updating to #{sha}.'"
    sh "git push origin gh-pages"
  end
  puts 'Done.'
end

task :default => :publish
