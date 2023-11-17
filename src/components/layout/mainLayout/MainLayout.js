import Header from '../header/Header';

import './MainLayout.css';

function MainLayout(props) {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default MainLayout;
