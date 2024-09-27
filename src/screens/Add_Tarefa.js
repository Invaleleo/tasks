import React, {Component} from "react"
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal 
} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome6";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker"//digitar a data
// Modal - recursos de tela sobrepostas, chama um tela em cima da outra.
export default class Add_Tarefa extends Component{
    render(){
        const data_formatada = moment(new Date()).format('ddd, D [de] MMM [de] YYYY') {/* variavel para data */}
        return(
            <Modal
                transparent={true}
                visible={true}
                animationType="slide"
            >
                <TouchableWithoutFeedback>{/* trasnparecia e se clicar fora ele fecha a modal */}
                    <View style = {styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text style={Styles.cabecalho} > Nova Tarefa </Text>
                    <View style={Styles.container}>
                        <Icon name="clipboard-check" size={25} ></Icon>
                        <TextInput 
                        style={Styles.input}
                            placeholder="Descrição da Tarefa" 
                        />{/* campo de texto */}
                    </View>
                    
                    {/*parte para calendario */}
                    <TouchableOpacity style={styles.container}>
                        <Icon name="calendar" size={25}>
                            <Text style={styles.data}>{data_formatada}</Text>
                        </Icon>
                    </TouchableOpacity>

                    <View>
                    <TouchableOpacity>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                
                <TouchableWithoutFeedback>
                    <View style = {styles.fundo}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )  
    }
}

const Styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)'//rgba no css fornece transparencia | o.7 é a transparencia 70% opaca e 30% trasnparente
    },
    principal:{
        flex:1,
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor: "#B1B44",
        color: "#FFF",
        textAlign: 'center',
        padding: 20,
        fontSize: 25
    },
    input:{
        width: '85%',
        margin: 15,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'flex-end'       
    },
    botao:{
        margin: 20,
        marginRight: 30,
        color: '#B13B44'
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        paddingVertical: 10
    },
    data:{
        margin: 10,
    }
})