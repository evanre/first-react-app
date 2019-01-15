import React, {Component} from 'react';

import Slide_1 from '../img/slide-1.jpg';
import Slide_2 from '../img/slide-2.jpg';
import Slide_3 from '../img/slide-3.jpg';
import Slide_4 from '../img/slide-4.jpg';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: [
                {
                    eachSlide: `url(${Slide_1})`
                },
                {
                    eachSlide: `url(${Slide_2})`
                },
                {
                    eachSlide: `url(${Slide_3})`
                },
                {
                    eachSlide: `url(${Slide_4})`
                },
            ],
            autoplay: false,
            active: 0,
            max: 0,
        };

        this.state.max = this.state.slides.length - 1;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
        this.toggleAutoplay = this.toggleAutoplay.bind(this);
        this.nextOne = this.nextOne.bind(this);
        this.prevOne = this.prevOne.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.intervalBetweenSlides();
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    intervalBetweenSlides() {
        if (this.state.autoplay === true) {
            const active = this.state.active;
            this.setState({
                active: active === this.state.max ? 0 : active + 1,
            })
        }
    }

    toggleAutoplay() {
        this.setState({
            autoplay: !this.state.autoplay
        });
    }

    prevOne() {
        const active = this.state.active;
        this.setState({
            active: active > 0 ? active - 1 : this.state.max
        });
    }

    nextOne() {
        const active = this.state.active;
        this.setState({
            active: active < this.state.max ? active + 1 : 0
        });
    }

    dots(index) {
        this.setState({
            active: index
        });
    }

    isActive(val) {
        if (this.state.active === val) {
            return 'active';
        }
    }

    setSliderStyles() {
        const transition = this.state.active * -100 / this.state.slides.length;

        return {
            width: `${(this.state.slides.length * 100)}%`,
            transform: `translateX(${transition}%)`
        }
    }

    renderSlides() {
        const transition = 100 / this.state.slides.length + '%';

        return this.state.slides.map((item, i) => (
            <div
                className='each-slide'
                key={i}
                style={{backgroundImage: item.eachSlide, width: transition}}>
            </div>
        ));
    }

    renderDots() {
        return this.state.slides.map((item, i) => (
            <li
                className={this.isActive(i) + ' dots'}
                key={i}
                ref="dots"
                onClick={this.dots.bind(this, i)}
            >
                <button>&#9679;</button>
            </li>
        ));
    }

    renderPlayStop() {
        let playStop;

        if (this.state.autoplay) {
            playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg>;
        } else {
            playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>;
        }

        return playStop;
    }

    renderArrows() {
        return (
            <div>
                <button
                    type="button"
                    className="arrows prev"
                    onClick={this.prevOne}
                >
                    <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>

                <button
                    type="button"
                    className="arrows next"
                    onClick={this.nextOne}
                >
                    <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </div>
        );
    }

    render() {
        return (
            <div className='slider'>
                <div
                    className='wrapper'
                    style={this.setSliderStyles()}
                >
                    {this.renderSlides()}
                </div>

                {this.renderArrows()}

                <ul className='dots-container'>
                    {this.renderDots()}
                </ul>

                <button
                    className='toggle-play'
                    onClick={this.toggleAutoplay}
                >
                    {this.renderPlayStop()}
                </button>
            </div>
        )
    }
}
