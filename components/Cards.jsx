import Link from 'next/link';
import styled from '../styles/Cards.module.css';
import { useRouter } from 'next/router';

export default function Cards({ pokemon }) {

    const router = useRouter();

    return (
        <article className={styled.article}>
            <div className={styled.imagePokemon}>
                <img className={styled.img} src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                alt="Imagem do Pokémon" />
            </div>
            <h4 className={styled.name}>{ pokemon.name }</h4>
            <button onClick={() => router.push(`/pokemon/${pokemon.id}`)}>Ver mais</button>
        </article>
    )
}