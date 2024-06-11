import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text, ImageBackgound} from "react-native" //import do css, view e text

import moment from "moment" // biblioteca para trabalhar com datase horas
import 'moment/locate/pt-br'

import today_Image from "../../assets/imgs/today.jpg"

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        // variavel today com o moment para data de hoje, com o locale - brasil e o formato com
        // dia da semana  abreviado (ex: ter) (ddd), D dia [de] (colchetes simbolixa o texto) e mes abreviado
        return(
            <view style ={styles.container}>
                <ImageBackgound source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text> 

                    </View>
                    
                </ImageBackgound>
                <view style={styles.taskList}>
                    <Text>Lista de Tarefas</Text>
                </view>
            </view>
        )
    }
} 
// {today} variavel para datas atuais
//-----------------------------------------------------------------------

//esquema de css
const styles = StylesSheet.create({ //variável q guarda os estilos
    container: {
        flex: 1
    },
    backgound:{
        flex: 3
    },
    taskList:{
        flex:7
    },
    titleBar:{
        flex:1,
        justifyContent: 'flex-end' // Joga o texto para baixo
    },
    title:{
        fontfamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20, // margem do lado esquerdo
        marginBottom: 30 // margem de chão 

    }



})