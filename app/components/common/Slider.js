import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <p class="font-bold">속도를 적당히 조정 해주세요!</p>
                    <div id="speedSlider" className="slider red"></div>
                </div>
            </div>
        )
    }
}

export default Slider

