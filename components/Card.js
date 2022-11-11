import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';

const Card = (props) => {


    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);
    const [total, setTotal] = useState(1);


    return (
        <>

            <>
                <Modal
                    // animationType="slide"
                    // animationType="fade"
                    transparent={true}
                    visible={show}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>

                        <View style={styles.modalView}>
                            <View style={styles.modalImageContainer} >

                                <Image
                                    style={styles.modalImage}
                                    source={{
                                        uri: props.productDetails.image,
                                    }}
                                />

                            </View>

                            <View style={{ flexDirection: "row", width: "100%", marginTop: "5%" }} >
                                <Text style={{ fontWeight: "600", width: "30%", fontSize: 14 }} >Description:</Text>
                                <Text style={{ fontWeight: "400", width: "70%", fontSize: 12 }}>{props.productDetails.description}</Text>
                            </View>

                            <View style={{ flexDirection: "row", width: "100%", marginTop: "5%", justifyContent: "space-evenly" }} >
                                <TouchableOpacity onPress={() => { setShow(false) }} style={[styles.button, { backgroundColor: "red", width: "50%", }]} >

                                    <View style={{ justifyContent: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
                                        <Feather name="shopping-cart" size={18} color="white" />
                                        {/* </View>
                                    <View style={{ justifyContent: "center", }}> */}
                                        <TouchableOpacity onPress={() => { setAdd(true); setShow(false) }} >
                                            <Text style={{ alignSelf: "center", fontSize: 14, fontWeight: "600", color: "white" }} >Add To Cart</Text>
                                        </TouchableOpacity>
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setShow(false) }} style={[styles.button, { backgroundColor: "white" }]} >
                                    <Text style={{ alignSelf: "center", fontSize: 14, fontWeight: "600" }} >Close</Text>
                                </TouchableOpacity>
                            </View>



                        </View>


                    </View>
                </Modal>
            </>
            <View style={styles.card} >

                <TouchableOpacity onPress={() => { setShow(true) }} style={styles.imageContainer} >

                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: props.productDetails.image,
                        }}
                    />

                </TouchableOpacity>

                <View style={styles.textContainer}>

                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ fontSize: 14, fontWeight: "600", width: "35%" }}>Title : </Text>
                        <Text style={{ fontSize: 12, fontWeight: "400", width: "65%" }}> {props.productDetails.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ fontSize: 14, fontWeight: "600", width: "35%" }}>Category : </Text>
                        <Text style={{ fontSize: 14, fontWeight: "400", width: "65%" }}>{props.productDetails.category}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ fontSize: 16, fontWeight: "600", width: "35%" }}>{props.productDetails.price}</Text>

                        {add ? (
                            <View style={{ flexDirection: "row", width: "65%", justifyContent: "space-around", backgroundColor: "#D3D3D3", borderRadius: 10 }}>
                                <TouchableOpacity onPress={() => { total > 0 ? setTotal(total - 1) : setTotal(0) }} >
                                    {/* <Text style={{ fontSize: 30, fontWeight: "600" }}>-</Text> */}
                                    <AntDesign name="minus" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, fontWeight: "600", alignSelf: "center" }}>{total}</Text>
                                <TouchableOpacity onPress={() => { setTotal(total + 1) }} >
                                    {/* <Text style={{ fontSize: 26, fontWeight: "600" }}>+</Text> */}
                                    <Ionicons name="add-outline" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        ) : (null)}


                    </View>
                </View>

            </View>
            <View style={{ marginTop: 2 }} ></View>
        </>
    );
};


export default Card;


const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        height: 120,
        backgroundColor: "white",
        marginTop: "5%"

    },
    imageContainer: {
        width: "30%",
        height: "80%",
        alignSelf: "center",
    },
    textContainer: {
        justifyContent: "space-evenly",
        width: "60%",
    },
    tinyLogo: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
        borderRadius: 10,
        resizeMode: "contain"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 0,
    },
    modalView: {
        // margin: 20,
        backgroundColor: "#E6BF83",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        // height: "60%"
    },
    button: {
        width: 100,
        height: 35,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center"
    },
    modalImageContainer: {
        width: "40%",
        height: 150
    },
    modalImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 10
    },


});