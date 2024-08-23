import React from "react" // Importa a biblioteca React
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native" // Importa componentes do React Native
import Icon from "react-native-vector-icons/FontAwesome6" // Importa um ícone específico da biblioteca FontAwesome6

import moment from "moment" // Importa a biblioteca moment para manipulação de datas // uma biblioteca que trabalha com datas e horas
import 'moment/locale/pt-br' //importa os padrões de horas no pt-br

// Componente funcional que recebe `props`
export default props => { //modelo de como os dados ficarão na lista (saem do banco de dados do cllr) | componente que vai montar a lista
    // Verifica se a tarefa está concluída (done_at) para aplicar o estilo de "line-through" (riscado)
    const done_or_not = props.done_at != null ? { textDecorationLine: "line-through" } : {}
    
    // Determina a data a ser exibida, priorizando `done_at` se estiver disponível, senão `estimate_at`
    const date = props.done_at != null ? props.done_at : props.estimate_at
    
    // Formata a data para exibição usando a biblioteca moment
    const formated_date = moment(date).format('ddd, D [de] MMM [de] YYYY')
    
    // Retorna a estrutura do componente a ser renderizado
    
    return (
            <View style={styles.container}> {/* Container principal */}
                <TouchableWithoutFeedback> {/* Área clicável ** <TouchableWithoutFeedback onPress={() => alert("Olá")}> {/* osPress = trasnforma o icone num objeto selecionavel */} 
                    <View style={styles.checkContainer}> {/* Container do ícone de verificação */}
                        {get_Check_View(props.done_at)} {/* Chama a função para renderizar o ícone */}
                    </View>
                </TouchableWithoutFeedback>
                <View> {/* Container para descrição e data */}
                    <Text style={[styles.desc, done_or_not]}>{props.description}</Text> {/* Exibe a descrição da tarefa com estilo condicional */}
                    <Text style={styles.date}>{formated_date}</Text> {/* Exibe a data formatada */}
                </View>
            </View>
        )
}

// Função auxiliar para renderizar o ícone de verificação baseado no estado de conclusão (done_at)
function get_Check_View(done_at) {
    if (done_at != null) { // Se a tarefa está concluída
        return (
            <View style={styles.done}> {/* Estilo para o ícone de tarefa concluída */}
                <Icon name="check" size={20} color="#FFF"></Icon> {/* Ícone de "check" */}
            </View>
        )
    } else { // Se a tarefa não está concluída
        return (
            <View style={styles.pending}> {/* Estilo para o ícone de tarefa pendente */}
            </View>
        )
    }
}

// Definições de estilo usando StyleSheet do React Native | CSS
const styles = StyleSheet.create({
    container: { // Estilo do container principal
        flexDirection: 'row', // Disposição dos elementos em linha | um do lado do outro 
        borderColor: '#AAA', // Cor da borda
        borderBottomWidth: 1, // Largura da borda inferior | borda apenas embaixo para separação
        alignItems: 'center', // Alinhamento dos itens ao centro
        paddingVertical: 10 // Espaçamento vertical
    },
    checkContainer: { // Estilo do container do ícone de verificação
        width: "20%", // Largura do container
        alignItems: 'center', // Alinhamento horizontal ao centro
        justifyContent: 'center' // Justificação ao centro
    },
    done: { // Estilo para o ícone de tarefa concluída
        height: 25, // Altura do ícone
        width: 25, // Largura do ícone
        borderRadius: 13, // Arredondamento das bordas
        borderWidth: 1, // Largura da borda
        backgroundColor: "#4D7031", // Cor de fundo (verde)
        alignItems: 'center', // Alinhamento horizontal ao centro
        justifyContent: 'center' // Justificação ao centro
    },
    pending: { // Estilo para o ícone de tarefa pendente
        height: 25, // Altura do ícone
        width: 25, // Largura do ícone
        borderRadius: 13, // Arredondamento das bordas
        borderWidth: 1, // Largura da borda
        borderColor: "#555" // Cor da borda (cinza)
    },
    desc: { // Estilo para a descrição da tarefa
        fontFamily: "Arial", // Fonte da descrição
        fontSize: 20, // Tamanho da fonte
        color: "#333" // Cor do texto (cinza escuro)
    },
    date: { // Estilo para a data
        fontFamily: "Arial", // Fonte da data
        color: "#555" // Cor do texto (cinza)
    }
})