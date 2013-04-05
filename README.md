With [literate coffeescript](http://coffeescript.org/#literate) introduced in 1.5.0, and with my humbling in attempting to solve some [Project Euler problems](http://projecteuler.net/problems) in Haskell (also [literate](http://www.haskell.org/haskellwiki/Literate_programming)), and with @jashkenas...

> ...looking forward to writing (and more importantly, reading) more programs in [literate coffeescript].

...I decided to forge onward with the FP principles wrangled from Haskell and apply them in a more accessible arena.

Ladies, gentlemen and bots, I present to you:

# euler-litcoffee

####<u>How to use</u>

1. `$ clone` it. `$ cd` inside its directory.
2. `$ npm install`.
3. `$ node server.js`.
4. <http://localhost:3000>. The first two problems are written and solved.
5. Pick a [problem](http://projecteuler.net/problems) and create your literate coffeescript.
    1. *If you like, use one of the existing problems as a template `public/js/app/*.coffee.md`.
    2. Name the file *whatever*`.coffee.md` or *whatever*`.litcoffee`. The existing problems are named after the problem solved (ex. `one.coffee.md` = Problem 1). *(Technically you also write plain coffeescript (*`*.coffee`*) but where's the fun in that?)* Put the file in `public/js/app/`.
    3. Add the file to the `public/js/main.js` problems config array. For instance, if the problem file is `three.coffee.md`:
<pre>
"config": {
    "../app/main.coffee.md": {
        "problems": [
            "js/app/one.coffee.md",
            "js/app/two.coffee.md",
            <span style="color: blue;">**"js/app/three.coffee.md"**</span>
        ]
    }, ...
}
</pre>
    Note: The order the problems appear in this array will be the order they appear on the page.
    4. As you can see from the existing problems, each problem must define a [require js](http://requirejs.org/) module having a `solve()` function the module exports. `solve()` must return the problem solution. You are free to write the module (..solution) any way you want, just return the result in `solve()`.
6. That's it. Save and refresh. Click on any problem link. Hit the `Solve!` button and the result will be displayed. The [prettied](https://code.google.com/p/google-code-prettify/) coffeescript is **exactly** the same code that is compiled and ran; adjust as necessary.

Pull in whatever libraries you want to use and drop them in `public/js/lib/`. [underscore.js](http://underscorejs.org/) and [functional.js](http://osteele.com/sources/javascript/functional/) are ready for use.

The styling is basic. I know, so back off!
