import "../components/Images.css";

const Images = () => {
    return ( 
        <section>
            <div className="foodGrid">
                <div>
                    <img className="pic" src="../src/assets/img/salat.jpeg" alt="" />
                    <h5 className="description">Rohkost-Salat</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$15</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/pizza.jpeg" alt="" />
                    <h5 className="description">Pizza Prosciutto</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$12.50</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/frikadellen.jpeg" alt="" />
                    <h5 className="description">Fleischbällchen auf Salatbouquett</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$8.50</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/glass.jpeg" alt="" />
                    <h5 className="description">Gin Tonic</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$9.50</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/pizza2.jpeg" alt="" />
                    <h5 className="description">Pizza Napoletana</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$13.90</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/scampi.jpeg" alt="" />
                    <h5 className="description">Gegrillte Scampi mit Duftreis und Rotem Curry</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$22.50</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/spagetthi.jpeg" alt="" />
                    <h5 className="description">Spaghetti Carbonara</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$16.50</p>
                </div>
                <div>
                    <img className="pic" src="../src/assets/img/teller.jpeg" alt="" />
                    <h5 className="description">Flammkuchen</h5>
                    <p className="loremText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.</p>
                    <p className="price">$14.90</p>
                </div>
            </div>
        </section>
     );
}
 
export default Images;