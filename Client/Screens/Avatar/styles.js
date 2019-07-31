import { StyleSheet } from 'react-native';
// import AppStyles from 'src/config/styles';

const styles = StyleSheet.create({
    avatarView: {
        width: 48,
        height: 48,
        backgroundColor: "#bdc3c7",
        borderRadius: 24
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        overflow: 'hidden'
    },
    statusDot: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 16,
        height: 16,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "#2ecc71"
    },
    avatarLargeView: {
        width: 64,
        height: 64,
        backgroundColor: "#bdc3c7",
        borderRadius: 32
    },
    avatarLarge: {
        width: 64,
        height: 64,
        borderRadius: 32,
        overflow: 'hidden'
    },
    statusDotLarge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "#2ecc71"
    }
});

export default styles;
// 