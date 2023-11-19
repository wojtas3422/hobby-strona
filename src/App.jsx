import Element from "./Components/Element"
import SectionDesc from "./Components/SectionDesc"
import Footer from "./Components/Footer"
import WiekszeMozliwosci from "./Components/WiekszeMozliwosci"
import PonadHTML from "./Components/PonadHTML"
import Hero from "./Components/Hero"

import icons from "/images/icons.png"
import laptop from "/images/laptop.png"
import html from "/images/html.png"
import reactLogo from "/images/react.png"
import npm from "/images/npm.png"
import node from "/images/node.png"
import wave from "/images/lapka.png"


function App() {
	return (
		<>
			<div className="h-screen overflow-scroll snap-y-scroll">
				<Hero />

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="MojeHobby" />
					<SectionDesc title="Moim hobby jest tworzenie stron i aplikacji internetowych, takich jak ta!" img={icons} bigImg={true} imgAlt="Logo HTML, CSS, JavaScript, NodeJs, ReactJs i Linux Tux na kółku." />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="OMnie" />
					<SectionDesc title="Zaczełem interesować się tworzniem stron internetowych hobby kiedy dostałem mojego pierwszego laptopa, około 2020 roku." img={laptop} bigImg={true} imgAlt="Zdjęcie mojego laptopa z pulpitem Linux." />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="JęzykHTML" />
					<SectionDesc title="Pierwszy raz kiedy spotkałem się z tworzeniem stron było poznanie języka HTML. Pozwala on na tworzenie bardzo podstawowych jak na dzisiejsze standardy stron intenetowych." img={html} />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="PonadHTML" />
					<PonadHTML />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="WiększeMożliwości" />
					<WiekszeMozliwosci />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="Framework?" />
					<SectionDesc title="Framework dodaje wiele funkcji do naszego JavaScript'u i zmienia sposób w jaki tworzymy strony i aplikacje internetowe. Prawdopodobnie jak wejdziesz na  jakąkowliek stronę w dzisiejszej sieci napotkałeś/aś się z frameworkiem nawet o tym nie wiedząc. Mamy dosyć spory wybór frameworków, moim ulubionym, którym się posłużyłem dla tej strony, jest React.js. Można pobrać go i wiele innych narzędzi do JavaScript'u z npmjs.com" img={npm} smImg imgAlt="Logo npm" />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="ReactJs" />
					<SectionDesc title="Reactjs służy do tworzenia interaktywnych aplikacji internetowych. Ma dosyć prostą składnie i modularne podejście do samego HTML, co oznacza, że mogę dzielić mój kod html na oddzielnie pliki i wykorzystywać go wiele razy w innych podstronach lub miejscach. Ma także wiele przydatnych funkcji które ułatwiają pisanie całych aplikacji. Tak samo jest najpopularniejszym frameworkiem. Na dzień dzisiejszy około 20 milonów stron używa React’a." img={reactLogo} imgAlt="Logo React.js" />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="Runtime" />
					<SectionDesc title="Żeby uruchomić naszą aplikacje potrzebujemy takiej rzeczy jak “runtime”. Pozwala nam on uruchomić nasz JavaScript poza przeglądarką. Nie możemy wrzucić kodu samego frameworka do przeglądarki, ponieważ przeglądarka nie rozumie tego języka. Node.js jest jednym z tych runetimów i pozwala nam on uruchomić serwer React.js, który przetłumaczy nasz kod React na kod zrozumiały przez przeglądarkę." img={node} smImg imgAlt="Logo nodejs" />
				</section>

				<section className="pt-10 md:pt-4 text-center relative snap-start overflow-y-hidden h-screen">
					<Element title="Koniec" />
					<SectionDesc title="Ta dość krótka strona podsumowuje moje doświadczenie z tworzeniem stron internetowych. Mam nadzieję że tworznie stron internetowych was zainteresowało! " img={wave} imgAlt="Machająca ręka na pożegnanie" />
				</section>
				<Footer />
			</div>
		</>
	)
}

export default App
