import './App.css'

/* ---------- HEADER ---------- */
function HeaderContainer() {
  return <div className="box"></div>;
}

function HeaderContainer2Content(props) {
  return (
    <div className="inner">
      <p>{props.name}</p>
    </div>
  );
}

function HeaderContainer2() {
  return (
    <div className="peach-box">
      <div className="red-group">
        <HeaderContainer2Content name="Nicole" />
        <HeaderContainer2Content name="Bolus" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="section">
      <HeaderContainer />
      <HeaderContainer2 />
      <HeaderContainer />
    </div>
  );
}

/* ---------- BODY ---------- */
function BodyContainer() {
  return <div className="left"></div>;
}

function BodyContainer2Content() {
  return <div></div>;
}

function BodyContainer2() {
  return (
    <div className="right">
      <BodyContainer2Content />
      <BodyContainer2Content />
    </div>
  );
}

function Body() {
  return (
    <div className="middle">
      <BodyContainer />
      <BodyContainer2 />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function FooterContainer1() {
  return <div className="side"></div>;
}

function FooterContainer2(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

function FooterContainerCenter() {
  return (
    <div className="center">
      <FooterContainer2 text="C-PCIT9" />
      <FooterContainer2 text="IT3B" />
    </div>
  );
}

function Footer() {
  return (
    <div className="bottom">
      <FooterContainer1 />
      <FooterContainerCenter />
      <FooterContainer1 />
    </div>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <div className="scale-wrapper">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
