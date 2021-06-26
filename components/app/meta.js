import Head from 'next/head'

const Meta = ({ title, keywords, desc }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={desc} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Myo\'s folio',
    keywords: 'portfolio, computer science, analyst, myanmar',
    description: 'Welcome to my portfolio site' 
}

export default Meta