import "../components/Head.css";

const Head = () => {
    return (
        <header className="titleSection">
            <h3>Hello There</h3>
            <h1>We are Glint</h1>
            <hr />
            <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim officia voluptates non perspiciatis? Error, dolor obcaecati repellendus itaque neque nisi commodi voluptatum numquam sunt, nobis necessitatibus, nemo quae vel non sequi eum. Porro laboriosam totam libero doloremque delectus, vero nesciunt error. Quaerat unde, mollitia minima voluptas incidunt nam alias.</p>
            <div className="stats">
                <div>
                    <h2>127</h2>
                    <h4>Awards Received</h4>
                </div>
                <div className="vl">
                    <h2>1505</h2>
                    <h4>Cups of Coffee</h4>
                </div>
                <div className="vl">
                    <h2>109</h2>
                    <h4>Projects Completed</h4>
                </div>
                <div className="vl">
                    <h2>102</h2>
                    <h4>Happy Clients</h4>
                </div>
            </div>
        </header>    
    )
}
               
                

export default Head