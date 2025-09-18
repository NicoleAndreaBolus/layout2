import './App.css'

/* ---------- HEADER ---------- */
function TopBox() {
  return <div className="box"></div>;
}

function NameText(props) {
  return (
    <div className="inner">
      <p>{props.name}</p>
    </div>
  );
}

function PeachGroup() {
  return (
    <div className="peach-box">
      <div className="red-group">
        <NameText name="Nicole" />
        <NameText name="Bolus" />
      </div>
    </div>
  );
}

function TopPart() {
  return (
    <div className="section">
      <TopBox />
      <PeachGroup />
      <TopBox />
    </div>
  );
}

/* ---------- BODY ---------- */
function LeftPanel() {
  return <div className="left"></div>;
}

function RightPanelItem() {
  return <div></div>;
}

function RightPanel() {
  return (
    <div className="right">
      <RightPanelItem />
      <RightPanelItem />
    </div>
  );
}

function MidPart() {
  return (
    <div className="middle">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function SideBlock() {
  return <div className="side"></div>;
}

function CenterText(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

function CenterGroup() {
  return (
    <div className="center">
      <CenterText text="C-PCIT9" />
      <CenterText text="IT3B" />
    </div>
  );
}

function BottomPart() {
  return (
    <div className="bottom">
      <SideBlock />
      <CenterGroup />
      <SideBlock />
    </div>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <div className="scale-wrapper">
      <div className="container">
        <TopPart />
        <MidPart />
        <BottomPart />
      </div>
    </div>
  );
}

export default App;
