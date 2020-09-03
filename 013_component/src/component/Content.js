import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);

    }

    thongbao = () => { alert('onclick js') }

    thongbao2 = (x) => {
        alert(x)
    }

    render() {
        return (
            <div className="col-4">
                <div className="card mt-2">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.tieude}</h3>
                        <p className="text-justify">
                            <img className="img-fluid" src="img/01.jpg" alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.
                        </p>
                        <div className="btn btn-group">
                            <button type="button" className="btn btn-primary" onClick={() => this.thongbao()}>Thêm</button>
                            <button type="button" className="btn btn-info" onClick={() => this.thongbao2("ha ha")}>Sửa</button>
                            <button type="button" className="btn btn-warning" onClick={() => this.thongbao2.bind(this, "ho ho ho")}>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;