// React
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const StateDropDown = () => (
  <StaticQuery
    query={graphql`
      query yolo {
        allUsCountiesCsv(
          filter: {
            date: { gte: "03/28/2020" }
            state: { eq: "Georgia" }
            deaths: {}
          }
        ) {
          totalCount
        }
      }
    `}
    render={data => {
      const nivoData = data.allUsStatesCsv.nodes.map(n => {
        return { x: n.state, y: n.cases }
      })
      console.log(nivoData)
      return (
        <header>
          <h1>here</h1>
        </header>
      )
    }}
  />
)

export default StateDropDown
