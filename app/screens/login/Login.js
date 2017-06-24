import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import I18n from 'react-native-i18n';
import { isFetching, didInvalidate } from './../../selectors/auth';
import { loginRequest } from './../../state/auth/actions';
import ActionBar from './../../components/action-bar/ActionBar';
import ActionLink from './../../components/action-link/ActionLink';
// import Button from '../../components/button/Button';
import InputField from '../../components/input-field/InputField';
import styles from './style';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '130p80056', // '500p150551',
            password: '123456',
            playing: true
        };
    }

    render() {
        const { isFetching, didInvalidate, loginRequest, navigation } = this.props;
      // const loginButtonState = isFetching ? Button.state.loading : didInvalidate ? Button.state.failure : Button.state.default;


        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <InputField
                      label="login"
                      value={this.state.username}
                      onChangeText={text => this.setState({ username: text })}
                    />
                    <InputField
                      label="password"
                      secureTextEntry
                      value={this.state.password}
                      onChangeText={text => this.setState({ password: text })}
                    />
                </View>
                <ActionBar >
                    <View style={styles.actionLinkContainer}>
                        <ActionLink text="reset"  onPress={() => navigation.navigate('ResetPassword')} style={{color: 'blue'}} />
                    </View>

                    <View style={styles.buttonContainer}>
                      <Button
                        // style={styles.buttonContainer}
                        onPress={() => loginRequest(this.state)}
                        title="Login"
                      />
                        {/*<Button*/}
                          {/*state={loginButtonState}*/}
                          {/*appearance={Button.appearance.primary}*/}
                          {/*text="Login"*/}
                          {/*iconFamily={Button.iconFamily.login}*/}
                          {/*onPress={() => loginRequest(this.state)}*/}
                        {/*/>*/}
                    </View>
                </ActionBar>
            </View>


        );
    }
}


const mapStateToPros = state => ({
    isFetching: isFetching(state),
    didInvalidate: didInvalidate(state)
});

const mapDispatchToProps = {
    loginRequest: () => {

        loginRequest()
    },
};

export default connect(mapStateToPros, mapDispatchToProps)(Login);
