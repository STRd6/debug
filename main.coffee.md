Debug
=====

Some helpful utilities for advanced debugging.

Implementation
--------------

    Debug =

By default, breakOn will only break when JS attempts to change the value of a 
property. The third optional argument takes 'read' if you'd also like to break 
when values are read.
    
      breakOn: (obj, prop, mode) ->
    
        var value = obj[prop]
    
        Object.defineProperty obj, prop,
          get: ->
            if mode is "read"
              debugger

            value

          set: (newValue) ->
            debugger
            value = newValue


    module.exports = Debug
