import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

class Tab extends PureComponent {
    constructor() {
        super();

        this._handleTabPress = this._handleTabPress.bind(this);
    }

    _handleTabPress() {
        this.props.onTabPress(this.props.tabIndex);
    }

    _getColor() {
        if (this.props.selected === this.props.tabIndex) {
            return this.props.activeColor;
        }

        return this.props.unActiveColor;
    }

    render() {
        return (
            <View style={[
                {
                    borderBottomColor: this.props.selected === this.props.tabIndex ? this.props.activeColor : "#fff",
                    borderBottomWidth: 2
                },
                this.props.style,
                styles.container
            ]} >
                <TouchableOpacity
                    onPress={this._handleTabPress}
                    activeOpacity={this.props.pressOpacity}
                    style={[this.props.style, styles.container]}
                >
                    {this.props.name &&
                        <Icon
                            name={this.props.name}
                            size={this.props.iconSize}
                            color={this._getColor()}
                        />
                    }
                    {!this.props.onlyIcon &&
                        <Text style={[this.props.fontStyle, { color: this._getColor(), fontSize: this.props.fontSize }]}>
                            {this.props.label}
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

Tab.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    fontStyle: PropTypes.object,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Tab;