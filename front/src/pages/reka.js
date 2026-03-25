import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const catLoveQuotes = [
  "You make my heart purr with joy.",
  "I love you more than a cat loves a warm sunny spot.",
  "You're the cat's meow of my heart.",
  "Like a cat always lands on its feet, I always land in love with you.",
  "My love for you is like a cat's nine lives — endless.",
  "You've whisker'd your way into my heart.",
  "You are my favorite feline, my love, my everything.",
  "Loving you is like cuddling a kitten — pure bliss.",
  "You make every day feel like a cat napping in sunlight.",
  "My heart meows for you.",
]

const RekaPage = () => {
  const [quote, setQuote] = React.useState("")

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * catLoveQuotes.length)
    setQuote(catLoveQuotes[randomIndex])
  }, [])

  return (
    <Layout>
      <Seo title="Reka" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          padding: "2rem",
        }}
      >
        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M 50,85 C 50,85 10,60 10,35 C 10,20 20,12 30,12 C 38,12 46,18 50,25 C 54,18 62,12 70,12 C 80,12 90,20 90,35 C 90,60 50,85 50,85 Z"
              fill="#ff4b6e"
              stroke="#cc0033"
              strokeWidth="1"
            />
          </svg>
          <img
            src="https://cataas.com/cat/gif"
            alt="Random cat gif"
            style={{
              position: "absolute",
              width: "160px",
              height: "160px",
              objectFit: "cover",
              borderRadius: "50%",
              top: "46%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "4px solid white",
            }}
          />
        </div>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "1.4rem",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "420px",
            color: "#cc0033",
          }}
        >
          ❤️ {quote} ❤️
        </p>
      </div>
    </Layout>
  )
}

export default RekaPage
