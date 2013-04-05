Main CoffeeScript module
======

    define ['jquery', 'module', 'prettify', 'pagedown', 'handlebars'], ($, module) ->
      src = $('#problem-template').html()
      template = Handlebars.compile src
      converter = new Markdown.Converter()
      problems = module.config().problems
      size = problems.length
      $(problems).each (i, e) ->
        $.get e, (md) ->
          solve = null
          require ["cs!#{e.replace 'js', '..'}"], (module) ->
            solve = module.solve
            return
          toHtml = converter.makeHtml md
          ctx = 'content': toHtml
          htmlStr = template ctx
          fileName = /[^\/]+$/.exec e
          li = $ document.createElement 'li'
          $(li).addClass 'btn'
          $(li).text fileName
          $('.btn-group-vertical').append li
          $(li).click ->
            if not $(@).hasClass 'btn-inverse'
              $(@).siblings().removeClass 'btn-inverse'
              $(@).addClass 'btn-inverse'
              $('.span10').empty()
              $('.span10').append htmlStr
              $('pre').addClass 'prettyprint'
              prettyPrint()
              $('.btn-primary').click ->
                pre = $(@).next()
                $(pre).empty()
                text = prettyPrintOne "&gt; #{solve()}"
                $(pre).append text
                return
            return
          size -= 1
          return
        return
      id = setInterval ( ->
        if size is 0
          clearInterval id
          $('.btn-group-vertical').children(':first').click()
        return), 100
      return

