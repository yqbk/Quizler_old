import React, { PureComponent, PropTypes } from 'react';
import { Animated, Easing } from 'react-native';

class ImageSpin extends PureComponent {

    static propTypes = {
        source: PropTypes.number.isRequired,
        style: PropTypes.number.isRequired
    };

    constructor (props) {
        super(props);
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount () {
        this.spin()
    }

    spin () {
        this.spinValue.setValue(0);

        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 600,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {
        const {style, source} = this.props;
        const animationStyles = {
            transform: [
                {
                    rotate: this.spinValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg']
                    })
                }
            ]
        };

        return (
                <Animated.Image style={[animationStyles, style]} source={source}/>
        )
    }
}


export default ImageSpin;