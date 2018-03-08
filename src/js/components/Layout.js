import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchData } from "../actions/action"

@connect((store) => {
  return {
    data: store.reducer.data,
    isFetched: store.reducer.fetched
  }
})

export default class Layout extends Component {

  componentDidMount() {
    this.props.dispatch(fetchData())
  }
  
  render() {
    const { data, isFetched } = this.props

    if(isFetched && data){
      return <h1>{data.text}</h1>
    }
    return <h1>Loading...</h1>

  }
}
