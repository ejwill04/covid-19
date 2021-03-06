// React
import React from "react"

// Material
import { makeStyles } from "@material-ui/core"

// Components
// import LineGraph from "../components/hoop/line-graph"
import BarRace from "../components/hoop/bar_race"

const useStyles = makeStyles({
  wrapper: {
    height: "90vh",
    padding: "3em 2em",
  },
})

const Hoop = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      {/* <LineGraph /> */}
      <BarRace />
    </div>
  )
}

export default Hoop
