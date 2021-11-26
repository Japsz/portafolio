import React, { useEffect } from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout';
import DirectoryTree from '../../components/DirectoryTree';
import api from '../../utils/api';
const DataScience = props => {
    const [paths, setPaths] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const fetchPaths = async () => {
        try {
            const paths = await api.get('/github/tree')
            setPaths(paths.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchPaths();
    }, []);
    return (
        <Layout>
            <Seo title="Data Science" />
            <div className="container mt-4">
                <div className="row">
                    <h2 className="font-logo">Data Science</h2>
                    <p>
                        Actualmente estoy estudiando Data Science en la <a href="https://desafiolatam.com/">Academia Desafío Latam</a> y he estado subiendo mis respuestas de cada trabajo y prueba a un repositorio público en Github.
                        Se cumplen 38 semanas de estudio y habré terminado el curso en la primera quincena de Febrero 2022.
                    </p>
                    <p>
                        A continuación se muestra un explorador del repositorio en la rama <code>master</code> poblado en vivo usando la API de Github. Existe también, al clickear uno, un visualizador de los <span className="fst-italic">Jupyter Notebook</span> de cada entregable.
                    </p>
                </div>
                <div className="row mt-2">
                    <a href="https://github.com/Japsz/DesafioLatam" target="_blank" rel="noreferrer">
                        <h5 className="font-logo"><i className="bi bi-github me-2" />DesafíoLatam</h5>
                    </a>
                    {
                        loading ? <div className="d-flex justify-content-center"><div className="spinner-border m-5 text-primary" role="status" /></div> : <DirectoryTree paths={paths} />
                    }
                </div>
            </div>
        </Layout>
    );
};


export default DataScience;