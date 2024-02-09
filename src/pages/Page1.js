

function Page1() {
    return (
        <div>
            <div>
                <img src="./Chanelimage.jpg" alt="Image of a perfume" />
            </div>

            {/* <!-- add to cart wrapper --> */}
            <div>
                <h5>PERFUME</h5>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, perspiciatis. Cumque temporibus fuga
                    incidunt impedit voluptate reprehenderit dolorum </p>

                {/* <!-- price wrapper --> */}
                <div>
                    <h2>$149.99</h2>
                    <p>$169.99</p>
                </div>
                <br /><br /><br />

                {/* <!-- Add to cart button wrapper --> */}
                <button>Add to Cart</button>

            </div>

        </div>
    );
}

export default Page1;
