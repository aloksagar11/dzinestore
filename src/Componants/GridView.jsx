import React from 'react'

import Product from "../Componants/Product";

export default function GridView({filter_products}) {
    return (
            <div className=" grid grid-three-column">
                {filter_products.map((ele) => {
                    return (
                        <Product
                            image={ele.image}
                            id={ele.id}
                            name={ele.name}
                            price={ele.price}
                            company={ele.company}
                        />
                    );
                })}
            </div>
    )
}

