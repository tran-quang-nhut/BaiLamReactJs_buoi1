import React, { Component } from 'react'

export default class ProductList extends Component {
    renderList = () => {
        const arrItemJSX = [];
        for (let i = 0; i < 4; i++) {
            let itemJSX =
                <div className="col-lg-3 col-md-6 mb-4" key={i}>
                    <div className="card h-100">
                        <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            {
                                i % 2 === 0 ? 
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                :
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                            }
                        </div>
                        <div className="card-footer"><a className="btn btn-primary" href="#!">Find Out More!</a></div>
                    </div>
                </div>;
            arrItemJSX.push(itemJSX);
        }

        return arrItemJSX;
    }

    render() {
        return (
            <div className="row text-center">
                {this.renderList()}
            </div>
        );
    }
}
