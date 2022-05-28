import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import Prevention from '../../components/Prevention';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    return (
        <SafeAreaView >
            <View style={[styles.container, { paddingLeft: 20, paddingRight: 20, paddingBottom: 40 }]}>
                <View style={styles.headerIcon}>
                        <Feather name="menu" size={30} color="white" />
                        <EvilIcons name="bell" size={30} color="white" />
                    
                </View>
                <View style={styles.PressableBtnContainer}>
                    <Text style={styles.Covid}>Covid-19</Text>
                    <Pressable style={[styles.Btn, { backgroundColor: '#FFF' }]}>
                  <Text style={[styles.BtnText, { color: 'black' }]}><FontAwesome5 name="flag-usa" size={24} color="black" />   Covid-19 <AntDesign name="caretdown" size={15} color="black" /></Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.title}>Are you feeling sick?</Text>
                    <Text style={styles.description}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
                </View>
                <View style={styles.PressableBtnContainer}>
                    <Pressable style={[styles.Btn, { backgroundColor: 'red', }]}>
                        <Text style={styles.BtnText}> <Ionicons name="call" size={24} color="white" /> Call Now</Text>
                    </Pressable>
                    <Pressable style={[styles.Btn, { backgroundColor: "#4D79FF" }]}>
                        <Text style={styles.BtnText}><FontAwesome5 name="sms" size={24} color="white" /> Send SMS</Text>
                    </Pressable>
                </View>
                <StatusBar style="auto" />
            </View>
            <Prevention />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#473F97',
        marginTop: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,

    },
    headerIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop:10

    },
    Covid: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff"
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10
    },
    description: {
        color: '#fff',
        fontWeight: "400",
        marginBottom: 20
    },
    PressableBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20

    },
    Btn: {
        width: 155,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    BtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});