import styled from '../styles/Cards.module.css';

export default function Cards({ pokemon }) {
    return (
        <article className={styled.article}>
            <div className={styled.imagePokemon}>
                <img className={styled.img} src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                alt="Imagem do Pokémon" />
            </div>
            <h2 className={styled.name}>{ pokemon.name }</h2>
        </article>
    )
}