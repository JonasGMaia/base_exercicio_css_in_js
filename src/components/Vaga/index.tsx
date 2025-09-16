import { vagaLi, vagaTitulo, vagaLink } from './Vaga.ts';


export type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <vagaLi>
    <vagaTitulo>{props.titulo}</vagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <vagaLink href="#">
      Ver detalhes e candidatar-se
    </vagaLink>
  </vagaLi>
)

export default Vaga
