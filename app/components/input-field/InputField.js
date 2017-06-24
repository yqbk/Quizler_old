import React, { PropTypes, Component } from 'react';
import { Animated, TextInput, TouchableWithoutFeedback, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './style';
import { colors } from './../../config/styles';

const CLEAR_ICON = require('./img/grey.png');
const SHOW_ICON = require('./img/showPassword.png');

const ClearButton = ({icon, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={icon} style={styles.icon}/>
    </TouchableOpacity>
);

const ShowButton = ({icon, onPress}) => (
    <TouchableOpacity onPressIn={onPress} onPressOut={onPress} style={styles.button}>
        <Image source={icon} style={styles.icon}/>
    </TouchableOpacity>
);


export default class InputField extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        defaultValue: PropTypes.string,
        secureTextEntry: PropTypes.bool,

        /* those are TextInput props which are overridden
         * so, i'm calling them manually
         */
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        onChangeText: PropTypes.func,

    };


    constructor(props, context) {
        super(props, context);

        this._onLayout = this._onLayout.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._toggleSecureText = this._toggleSecureText.bind(this);

        this.focus = this.focus.bind(this);
        this.isFocused = this.isFocused.bind(this);
        this.blur = this.blur.bind(this);
        this.clear = this.clear.bind(this);

        const value = props.value || props.defaultValue;
        const isTextSecured = props.secureTextEntry;

        this.state = {
            value,
            isTextSecured,
            borderAnim: new  Animated.Value(0),
            labelAnim: new Animated.Value(value ? 1 : 0),
        };
    }

    _onLayout(event) {
        this.setState({
            width: event.nativeEvent.layout.width,
        });
    }

    _onChange(event) {
        this.setState({
            value: event.nativeEvent.text,
        });

        const onChange = this.props.onChange;
        if (onChange) {
            onChange(event);
        }
    }

    _onChangeText(text) {
        this.setState({
            value: text,
        });

        const onChangeText = this.props.onChangeText;
        if (onChangeText) {
            onChangeText(text);
        }
    }

    _onBlur(event) {
        if (!this.state.value) {
            this._toggleLabel(false);
        }

        this._toggleBorder(false);

        const onBlur = this.props.onBlur;
        if (onBlur) {
            onBlur(event);
        }
    }

    _onFocus(event) {
        this._toggleLabel(true);
        this._toggleBorder(true);

        const onFocus = this.props.onFocus;
        if (onFocus) {
            onFocus(event);
        }
    }

    _toggleBorder(isActive) {
        Animated.timing(
            this.state.borderAnim, {
                toValue: isActive ? 1 : 0,
                duration: 300
            },
        ).start();
    }

    _toggleLabel(isActive) {
        Animated.timing(
            this.state.labelAnim, {
                toValue: isActive ? 1 : 0,
                duration: 300,
                easing: this.props.easing,
            },
        ).start();
    }

    _toggleSecureText() {
        this.setState({
            isTextSecured: !this.state.isTextSecured
        })
    }

    // public methods

    inputRef() {
        return this.refs.input;
    }

    focus() {
        this.inputRef().focus();
    }

    blur() {
        this.inputRef().blur();
    }

    isFocused() {
        return this.inputRef().isFocused();
    }

    clear() {
        this.inputRef().clear();
        this._onChangeText('');
        this._onChange({nativeEvent: { text: ''}});
    }

    render() {
        const { label, secureTextEntry, ...props } = this.props;
        const { width, labelAnim, borderAnim, value, isTextSecured } = this.state;

        const labelPositionStyle = {
            position: 'absolute',
            bottom: labelAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 50],
            })
        };
        const labelSizeStyle = [styles.label, {
            fontSize: labelAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 12]
            })}
        ];
        const borderGreyStyle = [styles.borderGrey, {
            width: borderAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [width, 0],
            })}
        ];
        const borderPinkStyle = [styles.borderPink, {
            width: borderAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, width],
            })}
        ];


        return (
            <View style={[styles.container]}
                  onLayout={this._onLayout} >

                <TouchableWithoutFeedback onPress={this.focus}>
                    <Animated.View style={labelPositionStyle}>
                        <Animated.Text style={labelSizeStyle}>
                            {label}
                        </Animated.Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TextInput ref="input"
                           value={value}
                           secureTextEntry={isTextSecured}
                           onBlur={this._onBlur}
                           onChange={this._onChange}
                           onChangeText={this._onChangeText}
                           onFocus={this._onFocus}
                           underlineColorAndroid={'transparent'}
                           style={[styles.textInput, { width }]}
                           selectionColor={colors.mainPink}
                           {...props}
                />

                <View style={styles.borderContainer}>
                    <Animated.View style={borderGreyStyle}/>
                    <Animated.View style={borderPinkStyle}/>
                </View>
                { !!secureTextEntry
                    ? <ShowButton icon={SHOW_ICON} onPress={this._toggleSecureText}/>
                    : <ClearButton icon={CLEAR_ICON} onPress={this.clear}/>
                }
            </View>
        );
    }
}
