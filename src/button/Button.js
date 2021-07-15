import React, {useState, useEffect} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'

function Button(props) {

  const [buttonValue, setButtonVal] = useState(0)

  const handleClick = ()=>{
    console.log("preseed");
    // let val = buttonValue + 1
    setButtonVal(buttonValue + 1)
  }
  console.log(props)
  return (
    <div className=".center">
      <button
        onClick={(e)=>{props.actions.updateVal(e)}}
        className="button"
      >Press me
        </button>
        <br></br>
        {props.state.buttonReducer.buttonVal}
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        state:{
            ...state
        }
    }
}

const mapDispatchToprops = (dispatch) =>{
    return{
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToprops )(Button);
