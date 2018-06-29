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

    getBorder() {
        if (this.props.highlight) {
            return {
                borderBottomColor: this.props.selected === this.props.tabIndex ? this.props.activeColor : "#fff",
                borderBottomWidth: 2,
            }
        }
    }

    getBackgroundColor() {
        if (this.props.selected === this.props.tabIndex) {
            return "#fff";
        } else {
            return "#dce3ea";
        }
    }

    getBottomPositionStyles() {
        if (this.props.positionBottom) {
            return {
                backgroundColor: this.getBackgroundColor(),
                width: "100%",
                paddingRight: 10,
                paddingLeft: 10
            }
        }
    }
    render() {
        return (
            <View style={[this.getBorder(), this.props.style, styles.container]} >
                <TouchableOpacity
                    onPress={this._handleTabPress}
                    activeOpacity={this.props.pressOpacity}
                    style={[this.props.style, styles.container, this.getBottomPositionStyles()]}
                >
                    {this.props.name &&
                        <Icon
                            name={this.props.name}
                            size={this.props.iconSize}
                            color={this.props.iconColor ? this.props.iconColor : this.props.highlight ? this._getColor() : "#000"}
                        />
                    }
                    {this.props.image ? (this.props.image) : <View />}
                    {!this.props.onlyIcon &&
                        <Text style={[this.props.fontStyle, { color: this.props.highlight ? this._getColor() : "#000", fontSize: this.props.fontSize }]}>
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
    positionBottom: PropTypes.bool,
    highlight: PropTypes.bool,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Tab;