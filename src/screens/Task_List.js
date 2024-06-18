import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text, ImageBackground} from "react-native" //import do css, view e text

import moment from "moment" // uma biblioteca que trabalha com datas e horas
import 'moment/locale/pt-br' //importa os padrões de horas no pt-br

//referenciar a imagemm
//../ sai da pasta
import today_Image from "../../assets/imgs/today.jpg"
import Task from "../components/Task" //import do task

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
   //{today} = variável pra data
    render(){
        //renderiza a tela para passar a data atual usando o recurso moment
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM') //formato padrão da data (ddd) dia da semana (D) dia do mês (MMMM) nome do mês
        return(
            <View style ={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}> 
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text> 
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                    
                </ImageBackground>
                <View style={(styles.taskList)}> /
                    <Task 
                        description="Estudar para prova de História" //import dos tasks
                        estimate_at={new Date()} //gerando uma data
                        done_at={new Date()}
                    />
                    <Task
                        description="Fazer a prova de história"
                        estimate_at={new Date()}
                        done_at={null} //essa informação ainda n existe
                    />
                    <Task
                        description="Chorar após a prova de História"
                        estimate_at={new Date()}
                        done_at={null}
                    />
                    {/*import dos tasks*/}


                </View>
            </View>
        )
    }
} 

//esquema de css
const styles = StylesSheet.create({ //variável q guarda os estilos
    container: {
        flex: 1 //utiliza toda a tela
    },
 //css background
    background:{
        flex: 3 //apenas 3 linhas
    },
//css lista de tarefas
    taskList:{
        flex: 7 //7 linhas
    },
//css titulo da data     
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end' //joga o conteudo pra baixo
    },
//css titulo 
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20 //margem pra baixo 

    },
//css subtitulo    
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20

    }


})

