import React, {Component} from 'react';
import $ from 'jquery';
import noUiSlider from 'nouislider';
import Slider from '../components/common/Slider';

class BouncingBall extends Component {
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <Slider/>
                <div className="row">
                    <div className="col-lg-12" id="body">
                        <div id="canvas" style={{
                            backgroundColor: '#1ab394',
                            marginTop: '20px'
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var slider = document.getElementById('speedSlider');
        var speed = 10;
        var ballSpeed = 0;
        var timeout, topX, topY;

        function setBallSpeed() {
            ballSpeed = 1000 / ( speed * 9 );
        }

        noUiSlider.create(slider, {
            start: speed,
            connect: "upper",
            range: {
                'min':  0,
                'max':  100
            }
        });

        slider.noUiSlider.on('change', function(values, handle){
            speed = values[handle];
            setBallSpeed();
            clearTimeout(timeout);
            ball.draw(topX, topY);
        });

        var canvas = {
            element: document.getElementById('canvas'),
            width: $(".wrapper").width(),
            height: $("#page-wrapper").height() - 160,
            initialize: function () {
                this.element.style.width = this.width + 'px';
                this.element.style.height = this.height + 'px';
                document.getElementById('body').appendChild(this.element);
            }
        };

        var ball = {
            element: document.createElement('div'),
            width: 20,
            height: 20,
            dx: 4,
            dy: 3,
            initialize: function () {
                this.element.className += ' ball';
                this.element.style.width = this.width + 'px';
                this.element.style.height = this.height + 'px';
                canvas.element.appendChild(this.element);
            },
            moveTo: function (x, y) {
                this.element.style.left = x + 'px';
                this.element.style.top = y + 'px';
            },
            changeDirectionIfNecessary: function (x, y) {
                if (x < 0 || x > canvas.width - ball.width) {
                    this.dx = -this.dx;
                }
                if (y < 0 || y > canvas.height - ball.height) {
                    this.dy = -this.dy;
                }
            },
            draw: function (x, y) {
                topX = x;
                topY = y;
                this.moveTo(x, y);
                var ball = this;
                timeout = setTimeout(function () {
                    ball.changeDirectionIfNecessary(x, y);
                    ball.draw(x + ball.dx, y + ball.dy);
                }, ballSpeed);
            }
        };

        setBallSpeed();

        setTimeout(function () {
            canvas.initialize();
            ball.initialize();
            ball.draw(0, 0);
        }, 200);
    }
}

export default BouncingBall