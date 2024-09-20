import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import Section from "./app/components/Section"
import HighLightSection from "./app/components/HighlightSection"

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <main
        style={{
          marginTop: '8rem'
        }}
      >
        <HighLightSection />
        <Section title="Recomendados para você"/>
        <Section title="Para toda a familia"/>
      </main>
      <Footer/>
    </div>

  )
}

export default App