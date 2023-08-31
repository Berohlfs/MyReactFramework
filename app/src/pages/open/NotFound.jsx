// Components
import PageCard from "../../components/PageCard"

const NotFound = ()=> {
    return (
        <PageCard
            title={'Erro 404'}
            caption={'Página não encontrada'}
            link={{text: 'Voltar à tela inicial?', path: '/home', label: 'Voltar'}}
            />
    )
}

export default NotFound
