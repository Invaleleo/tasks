import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text, TouchableWithoutFeedback } from "react-native" //import do css, view e text
import { Icon } from "react-native-vector-icons/FontAwesome6" 

import moment from "moment" // uma biblioteca que trabalha com datas e horas
import 'moment/locale/pt-br' //importa os padrões de horas no pt-br
//props: componente q monta as tasks
export default props =>{ //modelo de como os dados ficarão na lista (saem do banco de dados do cllr)
    return(
        <View style ={styles.container}> 
             <TouchableWithoutFeedback onPress={() => alert("Olá")}> {/* osPress = trasnforma o icone num objeto selecionavel */}
                <View style={styles.checkContainer}> 
                    <View style={styles.done}>
                         {/*<Icon name="check" size={20}></Icon>*/}
                    </View>
                </View>
             </TouchableWithoutFeedback>
            <View>
               <Text style={styles.desc}>{props.description}</Text> {/* Variaveis q vão receber as informações*/}
               <Text style={styles.date}>{props.estimate_at}</Text> {/* */}
               <Text style={styles.date}>{props.done_at}</Text> {/* */}
            </View>
        </View>

    )
}

// css :)
const styles = StylesSheet.create({
//container    
    container:{
        flexDirection: "row",
        borderColor: '#AAA', 
        borderBottomWidth: 1, //borda apenas embaixo para separação
        alignItems: 'center',
        paddingVertical: 10
    },
//css descrição    
    desc:{
        fontFamily: 'Arial',
        fontSize: 20
    },
//css date     
    date:{
        fontFamily: 'Arial'
    },
    checkContainer:{
        width: "20%",
        alignItems: "center",
        justifyContant: "center"
    },
    done:{
        height: 25,
        width: 25,
        borderRaridus: 13,
        borderWidth: 1,
        backgroundColor: "#4D7031",
        alignItems: "center",
        justifyContent: "center"
    },
    pending:{
        height: 25,
        width: 25,
        borderRaridus: 13,
        borderWidth: 1,
        borderColor: "#555555"
    }
})
