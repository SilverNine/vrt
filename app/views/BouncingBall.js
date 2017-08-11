import React, {Component} from 'react';
import $ from 'jquery';

const style = {
    backgroundColor: '#ccddcc',
    margin: '0 0 0 0',
    padding: '0 0 0 0'
};

class BouncingBall extends Component {
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12" id="body">
                        <div id="canvas" style={style}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var canvas = {
            element: document.getElementById('canvas'),
            width: $(".wrapper").width(),
            height: $("#page-wrapper").height() - 180,
            initialize: function () {
                this.element.style.width = this.width + 'px';
                this.element.style.height = this.height + 'px';
                document.getElementById('body').appendChild(this.element);
            }
        };

        var ball = {
            element: document.createElement('div'),
            width: 40,
            height: 40,
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
                this.moveTo(x, y);
                var ball = this;
                setTimeout(function () {
                    ball.changeDirectionIfNecessary(x, y);
                    ball.draw(x + ball.dx, y + ball.dy);
                }, 1000 / 60);
            }
        };

        canvas.initialize();
        ball.initialize();
        ball.draw(0, 0);
    }
}

export default BouncingBall