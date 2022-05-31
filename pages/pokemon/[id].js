import { instance } from "../../services"; 
import { useRouter } from "next/router";

export default function Pokemon({ pokemon }) {

    const { isFallback } = useRouter();
    
    if(isFallback) {
        return <p>Carregando</p>
    }

    return (
        <article>
            <h1>{ pokemon.name }</h1>
        </article>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${instance}/pokemon`);
    const json = await response.json();
    
    const paths = json.results.map((item, index) => {
        return {
            params: { id: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    const response = await fetch(`${instance}/pokemon/${id}`);
    const datas = await response.json();

    return {
        props: {
            pokemon: datas
        }
    }
}