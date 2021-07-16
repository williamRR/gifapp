import React from "react"
import ReactDOM from "react-dom"
import { GifExpertApp } from "./GifExpertApp"
import dotenv from "dotenv"
import "./index.css"

dotenv.config()
ReactDOM.render(<GifExpertApp />, document.getElementById("root"))
