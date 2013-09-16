    Debug = require('/main')

    describe "Debug", ->
      describe "breakOn", ->
        it "objects should continue to work normally outside of console", ->
          duder = 
            rad: true
            
          Debug.breakOn(duder, 'rad', "read")
          
          assert.equal duder.rad, true
          
          duder.rad = "yolo"
          
          assert.equal duder.rad, "yolo"
