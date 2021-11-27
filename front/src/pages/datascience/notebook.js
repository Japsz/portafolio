import React, { useEffect } from 'react';
import api from '../../utils/api'
import JupyterViewer from 'react-jupyter-notebook'
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import JupyterHeader from '../../components/Header/jupyter';
const Notebook = (props) => {
    const { location, navigate } = props;
    const {state} = location;
    const [ipynb, setIpynb] = React.useState(null);
    const path = state ? state.path : null;
    const name = state ? state.name : null;
    useEffect(() => {
        if (path) {
            api.post('/github/notebook', {path}).then(res => {
                console.log(res.data);
                if (res.data) {
                    setIpynb(res.data);
                }
            });
        }
    }, []);
    return (
        <Layout header={JupyterHeader} path={path ?? '...'}>
            <Seo title={name ?? 'Notebook'} />
            <div className="container mt-4">
                {ipynb && <JupyterViewer rawIpynb={ipynb} />}
            </div>
        </Layout>
    );
};

export default Notebook;