import * as state from "../output/statecachemodule.js"

var log = console.log
function olog(arg){
    log(JSON.stringify(arg, null, 4))
}

const options = {
    defaultState: {deflt:{hello:true}},
    basePath: ".my-state",
    maxCacheSize: 3
}

async function run() {

    //run test.
    state.initialize(options)

    var state1 = state.load("deflt")
    olog({state1})

    var state2 = state.load("state2")
    olog({state2})

    state2.a = 1
    state.save("state2")

    state2 = state.load("state2")
    olog({state2})

    var state3 = state.load("state3")
    state3.b = 2
    var state4 = state.load("state4")
    state4.c =3
    var state5 = state.load("state5")
    state5.d = 4
    state.logCacheState()

    state2 = state.load("state2")
    olog({state2})
    state.logCacheState()

    state.remove("state2")
    state2 = state.load("state2")
    olog({state2})

    olog({state3})
    state3 = state.load("state3")
    olog({state3})
    
    
}

run()
