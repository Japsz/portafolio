import React, { useEffect } from 'react';
import api from '../../utils/api'
import JupyterViewer from 'react-jupyter-notebook'
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import JupyterHeader from '../../components/Header/jupyter';
const Notebook = (props) => {
    const { location } = props;
    console.log(location)
    const [ipynb, setIpynb] = React.useState(null);
    useEffect(() => {
        api.get('/notebook').then(res => {
            setIpynb(res.data);
        });
    }, []);
    return (
        <Layout header={JupyterHeader} path="Unidad 3 - Machine Learning/Prueba/Sentimiento de Twitter/hito1.ipynb">
            <Seo title="Notebook" />
            <div className="container mt-4">
                {ipynb && <JupyterViewer rawIpynb={ipynb} />}
            </div>
        </Layout>
    );
};

export default Notebook;