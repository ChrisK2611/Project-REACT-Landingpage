import "../components/Main.css";

const Main = () => {
    return (
   <main>
        <section>
            <h4 className="whatWeDo">What We Do</h4>
            <h3 className="everything">We've got everything you need to launch and grow your business</h3>
            <div className="grid">
                <div>
                    <h5 className="talents">
                        <img src="../src/assets/img/brush.svg" alt="" /> Brand Identity
                    </h5>
                    <p className="blockText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto soluta, explicabo corrupti ab doloribus! Molestiae dolore praesentium, officiis, earum repellendus, ducimus dolor nemo consectetur nobis voluptatum pariatur laboriosam est!</p>
                </div>
                
                <div>
                    <h5 className="talents">
                        <img src="../src/assets/img/object-select.svg" alt="" /> Illustration</h5>
                    <p className="blockText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis velit animi officiis molestias accusantium sit praesentium porro voluptates! Ex tempore fugit vitae, quasi eaque consequatur. Explicabo doloremque id adipisci unde?</p>
                </div>
                <div>
                    <h5 className="talents">
                        <img src="../src/assets/img/megaphone.svg" alt="" /> Marketing</h5>
                    <p className="blockText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis velit animi officiis molestias accusantium sit praesentium porro voluptates! Ex tempore fugit vitae, quasi eaque consequatur. Explicabo doloremque id adipisci unde?</p>
                </div>
                <div>
                    <h5 className="talents">
                        <img src="../src/assets/img/globe-line.svg" alt="" /> Web Design</h5>
                    <p className="blockText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis velit animi officiis molestias accusantium sit praesentium porro voluptates! Ex tempore fugit vitae, quasi eaque consequatur. Explicabo doloremque id adipisci unde?</p>
                </div>
            </div>
        </section>
   </main>
    )
}

export default Main