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
// Modal - recursos de tela sobrepostas, chama um tela em cima da outra.
export default class Add_Tarefa extends Component{
    render(){
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
                    <TextInput
                        placeholder="Descrição da Tarefa" 
                    />{/* campo de texto */}
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
    }
})