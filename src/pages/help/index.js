

export default function Help() {

    return (
        <p> Help </p>
    )
}


export async function getStaticProps() {
    return {
        props: {
            title: 'Help',
        },
    }
}


