// Header component
function Header(props){
    return <h1>Ankahi mohabbat by {props.title}</h1>;
}

// Footer component
function Footer(props){
    return <h2>coming soon.....{props.year}</h2>
}

// components------------------------------------------
function App(){
    return(
        <div>
            <Header title="RAHUL"/>
            <p>WELCOME TO MY WEBSITE subtitle="DOST</p>
            <Footer year="2025" />
        </div>
    )
}
export default App