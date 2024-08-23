import React, { Component } from "react" // Importa React e o componente base (Component) para criar componentes de classe
import { StyleSheet, View, Text, ImageBackground, FlatList } from "react-native" // Importa componentes do React Native para a interface do usuário

import Icon from "react-native-vector-icons/FontAwesome6" // Importa um ícone específico da biblioteca FontAwesome6

import moment from "moment" // Importa a biblioteca moment para manipulação de datas
import 'moment/locale/pt-br' // Define o locale do moment para o português do Brasil

//referenciar a imagemm
//../ sai da pasta
import today_Image from "../../assets/imgs/today.jpg" // Importa a imagem de fundo para a tela "Hoje"

import Task from "../components/Task" // Importa o componente Task que será utilizado para exibir cada tarefa

// Classe que representa a lista de tarefas, estendendo o Component
export default class Task_List extends Component { // tem todas as características de um componente (herança)

    // Estado inicial com uma lista de tarefas predefinidas
    state = { //state: variavel local que manipula a memoria do cllr 
        show_done_task: true, //controla se as tarefas serão visiveis
        visible_tasks: [], //pega as tarefas e cria a lista visivel ou n 
        /* No estado inicial (state), a chave visible_tasks está sendo definida como uma lista vazia, 
            mas ela deveria ser uma cópia de tasks se show_done_task for true. Isso significa que, 
            inicialmente, visible_tasks não terá nenhum valor até que o método filter_task seja chamado */
        tasks: [{ //criando objeto de tarefas
            id: Math.random(), // Gera um ID aleatório para a tarefa //função que gera um numero aleatorio (identifica a tarefa)
            description: "Tarefa 1", // Descrição da tarefa //propriedades da tarefa
            estimate_at: moment(new Date()), // Data estimada de conclusão
            done_at: moment(new Date()) // Data em que a tarefa foi concluída
        },
        {
            id: Math.random(), // Gera um ID aleatório para a tarefa
            description: "Tarefa 2", // Descrição da tarefa
            estimate_at: moment(new Date()).add(7, "days"), // Data estimada de conclusão daqui a 7 dias
            done_at: null // A tarefa ainda não foi concluída
        },
        {
            id: Math.random(), // Gera um ID aleatório para a tarefa
            description: "Tarefa 3", // Descrição da tarefa
            estimate_at: moment(new Date()).add(14, "days"), // Data estimada de conclusão daqui a 14 dias
            done_at: null // A tarefa ainda não foi concluída
        }]
    }

    //criação do método de validação da clicagem 
    // Função que alterna o estado de conclusão de uma tarefa
    toggle_task = task_id => { //id identifica a tarefa
        const tasks = [...this.state.tasks] // Cria uma cópia da lista de tarefas
        tasks.forEach(task => { //forEach: estrutura de repetição que percorre os itens da lista
            if (task.id === task_id) { // Encontra a tarefa com o ID correspondente
                // Alterna entre concluído (com done_at) e não concluído (done_at = null)
                task.done_at = task.done_at != null ? null : new Date() //se o id for o mesmo, muda para a data atual ou deixa nulo
                //done_at: renderiza o check la no task 
            }
        })
        this.setState({ tasks }) // Atualiza o estado com a lista de tarefas modificada
    }

    //recurso de filtro (atualiza o que pode ser mostrado)
    filter_task = () => {
        let visible_tasks = null //variavel 

        if(this.state.show_done_task){ //verifica se essa variavel é true ou false 
            visible_tasks = [...this.state.tasks] //true: executa a linha e mostra ela inteira
        }                                          //...: mantém valor da variável e acrescenta conteúdo.

        else{
            const pending = task => task.done_at == null //verifica
            visible_tasks = this.state.tasks.filter(pending) //false: só mostra as pendentes
            //filter: filtra a lista por meio de uma condição 
        }
        this.setState({visible_tasks}) //atualiza a memoria 
    }

    //manipula o filter (atualiza os status da memoria)
    toggle_filter = () => {
        this.setState({show_done_task: !this.state.show_done_task}, this.filter_task) 
    }
    //inverte true -> false
    //false -> true



    // Método render que define como a interface deve ser exibida
    render() {
    //renderiza a tela para passar a data atual usando o recurso moment
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM') // Formata a data de hoje em português
        // formato padrão da data (ddd) dia da semana (D) dia do mês (MMMM) nome do mês
        return (
            <View style={styles.container}>

                <ImageBackground source={today_Image} style={styles.background}> {/* Exibe a imagem de fundo */}
                    <View style={styles.iconBar}> 
                        <TouchableOpacity onPress={this.toggle_filter}>
                            <Icon name="eye" size={20} color="#FFF"></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}> {/* Barra de título sobre a imagem */}
                        <Text style={styles.title}>Hoje</Text> {/* Título principal */}
                        <Text style={styles.subTitle}>{today}</Text> {/* Subtítulo com a data de hoje */}
                    </View>
                </ImageBackground>

                <View style={styles.taskList}> {/* Container para a lista de tarefas */}
                    <FlatList //flatlist: componente do react que cria uma lista 
                        data={this.state.visible_tasks} // Passa as tarefas do estado para o FlatList //informações mostradas no tasklist
                        keyExtractor={item => `${item.id}`} // Define o ID de cada item como chave única | como se fosse uma chave primária 
                        renderItem={({ item }) => <Task {...item} toggle_task={this.toggle_task}/>} // Renderiza cada tarefa usando o componente Task | a forma como sera mostrada
                        //toggle: passagem de função
                    />
                    {/* As linhas de código abaixo estão comentadas e não serão renderizadas */}
                    {/* <Task description={"terminar TCC"}
                        estimate_at={moment(new Date())}
                        done_at={moment(new Date())} />
                    <Task description={"apresentar TCC"}
                        estimate_at={moment(new Date()).add(5, "days")}
                        done_at={null} />
                    <Task description={"Tarefa 3"}
                        estimate_at={moment(new Date()).add(10, "days")}
                        done_at={moment(new Date())} /> 
                    -------------------------------------------------------------
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
                    *import dos tasks*
                        */}
                </View>
            </View>
        )
    }
}

// Estilos utilizados no componente | CSS
const styles = StyleSheet.create({ //variável q guarda os estilos
    container: { // Estilo para o container principal
        flex: 1 // Ocupa todo o espaço disponível | utiliza toda a tela
    },
    background: { // Estilo para a imagem de fundo
        flex: 3 // A imagem ocupa 3 partes da tela
    },
    taskList: { // Estilo para a lista de tarefas
        flex: 7 // A lista ocupa 7 partes da tela
    },
    titleBar: { // Estilo para a barra de título
        flex: 1, // A barra de título ocupa 1 parte da tela
        justifyContent: 'flex-end' // Alinha o conteúdo na parte inferior | joga o conteudo pra baixo
    },
    title: { // Estilo para o título principal
        fontFamily: 'Arial', // Fonte Arial
        fontSize: 50, // Tamanho da fonte 50
        color: '#FFF', // Cor do texto branca
        marginLeft: 20, // Margem à esquerda
        marginBottom: 20 // Margem inferior | Margem para Baixo
    },
    subTitle: { // Estilo para o subtítulo
        fontFamily: 'Arial', // Fonte Arial
        fontSize: 20, // Tamanho da fonte 20
        color: '#FFF', // Cor do texto branca
        marginLeft: 20, // Margem à esquerda
        marginBottom: 30 // Margem inferior
    },
    iconBar:{
        flexDirection: 'row', //organiza em linha 
        marginHorizontal: 20, //coloca margem dos 2 lados de 20px
        marginTop: 50, //deixa espacinho em cima
        justifyContent: 'flex-end' //muda pro lado direito 
    }
})
