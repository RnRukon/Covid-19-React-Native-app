import { View, Text, StyleSheet, Image } from 'react-native';
import CovidIcon from '../../assets/covidIcon.png';
import Doctor from '../../assets/Doctor-removebg-preview.png';
export default function Prevention() {
    return (
        <View style={styles.container}>
            <Text style={styles.Prevention}>Prevention</Text>
            <View>
                <Image source={CovidIcon} style={styles.ImageIcon} />
                <View style={styles.textContainer}>
                    <View style={styles.iconText}>
                        <Text style={{ textAlign: 'center' }}>Avoid close contact</Text>
                    </View>
                    <View style={styles.iconText}>
                        <Text style={{ textAlign: 'center' }}>Clean your hands often</Text>
                    </View>
                    <View style={styles.iconText}>
                        <Text style={{ textAlign: 'center' }}>Wear a facemask</Text>
                    </View>
                </View>
            </View>
            <View style={styles.OwnContainer}>
                <View>
                    <Image source={Doctor} style={{ height: 160, width: 100,marginTop:-30 }} />
                </View>
                <View style={styles.OwnTextContainer}>
                    <Text style={styles.OwnTitle}>Do your own test!</Text>
                    <Text style={styles.OwnDis}>Follow the instructions to do your own test.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    Prevention: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    ImageIcon: {
        height: 100,
        textAlign: 'center'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconText: {
        width: 100,
        textAlign: 'center'
    },
    OwnTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'graphik',
        color:'white'
    },

    OwnTextContainer: {
        width:200

    },
    OwnContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor:"rgba(71, 63, 151, 1)",
        borderRadius: 16,
        
     
    },

    OwnDis: {
        fontSize: 14,
        fontFamily: 'graphik',
        color:'white'
    }


})