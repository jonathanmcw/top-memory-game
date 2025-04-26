import { useState } from 'react'
import Card from './components/Card'
// import GameBoard from './components/GameBoard'
// import ScoreBoard from './components/Scoreboard'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="memory-grid">
        {/* <h1>Memory Game</h1>    */}
        <Card/>     
        <Card/>     
        <Card/>     
        <Card/>     
      </div>
      {/* // if loading then show loading screen
        // Go to fetch images from API if needed
      // if loaded show game
        //  */}

    </>
  )
}

export default App

// Here’s a simple way to organize your React memory game project:
// Suggested Folder Structure
// components/: For reusable UI components (Card, GameBoard, Scoreboard).
// App.jsx: Main app logic.
// App.css: Styles.
// index.js: Entry point.
// Odin Project Chapters to Follow
// Foundations

// JavaScript basics
// DOM manipulation
// React

// Introduction to React
// Components and props
// State and events
// Conditional rendering
// Lists and keys
// Project: Memory Card

// Follow the Memory Card Project instructions.