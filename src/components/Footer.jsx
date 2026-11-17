function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 20
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className="footer">
      <p>{isOpen ? "ហាងបើកដំណើរការ" : `ហាងយើងខ្ញុំបើកពី​ម៉ោង ${openHour}:00AM ដល់ម៉ោង ${closeHour}:00PM`}</p>
      {
        isOpen && (
          <button className="buy-button" type="button">
            ទិញ
          </button>
        )
      }
    </footer>
  )
}

export default Footer
