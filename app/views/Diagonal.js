import React, {Component} from 'react';
import $ from 'jquery';
import noUiSlider from 'nouislider';
import Slider from '../components/common/Slider';

class Diagonal extends Component {
    closeModal(e) {
        e.preventDefault();
        $("#modal").fadeOut( "slow", function() {

        });
    }

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


                <div className="modal inmodal" id="modal" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content animated fadeIn">
                            <div className="modal-header">
                                <i className="fa fa-clock-o modal-icon"></i>
                                <h4 className="modal-title">대각선 안구운동</h4>
                            </div>
                            <div className="modal-body">
                                <p>
                                    <strong>눈으로 공을 따라가도록 합니다.</strong><br/>
                                    1.최대 15분을 넘지 않도록 합니다.<br/>
                                    2.자세한 설명을 넣어보자<br/>
                                    3.자세한 설명을 넣어보자<br/>
                                    4.자세한 설명을 넣어보자<br/>
                                    5.자세한 설명을 넣어보자<br/>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-white" onClick={this.closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {
        var slider = document.getElementById('speedSlider');
        var speed = 20;
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
            setTimeout(function () {
                $("#modal").fadeIn( "slow", function() {

                });
            }, 1000);
        }, 200);
    }
}

export default Diagonal