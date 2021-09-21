// let state = {count: 0};
// set initial state

let state;
// declaring state variable but not assigning it anything

// function changeState(state, action){
function changeState(state = { count: 0 }, action)
// now the state is defined as a count of 0 only when the changeState function is called
// define action options (only 1 and default right now)
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
// actually change the state
    state = changeState(state, action)
    render()
// and render onto the document
}

function render(){
    document.body.textContent = state.count
    // render the state in the document body and this is not the place to bitch about better styling, right? right. 
}

dispatch({type: '@@INIT'})
// renders the initial state. not because of @@INIT but because we didn't say 'INCREASE_COUNT' so it just renders the initial state
// the @@INIT is just there for ... clarity?