# Markdown Tutorial

I couldn't find any useful Markdown lessons for writers on the internets. So I made one.

Feedback and suggestions are _greatly_ welcome!

### Markdown Flavor

As you might know, everyone and their sister has their own Markdown flavor and preference.
Since this is intended to be a tutorial for new users of Markdown, I decided to just
focus on the original specifics, leaving out tables, definition lists, and other
"addons." Curious writers that have mastered the basics can explore new syntaxes
by themselves.

In addition, I've omitted a lot of duplicity in the original Markdown syntax. For
example, these lessons don't mention that `-` and `+` are also valid list syntaxes,
or that `*` counts as italics (just as `__` counts as bold). While these omissions
are intentional, they're also preferential; I don't really like `+` for lists or
`__` as bold.


### Running Locally

After cloning the project, you need to run:

```
# grabs the dependencies
bundle install
# builds the CSS and JS
rake build
# runs the project in development mode
bundle exec shotgun
```

Et voila!

### Tech Stack

* [Sinatra](https://github.com/sinatra/sinatra) and [Shotgun](https://github.com/rtomayko/shotgun) for the server
* [AssetPack](https://github.com/rstacruz/sinatra-assetpack) for the Sass/CoffeeScript compilation
* [Ace](https://github.com/ajaxorg/ace) for the code editors
* [Marked](https://github.com/chjj/marked) for the Markdown conversion
* [Bootstrap](http://twitter.github.io/bootstrap/) for the design
