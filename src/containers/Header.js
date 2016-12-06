import React from 'react'
import Heading from '../components/Heading'
import SearchField from '../components/SearchField'

class HeaderComponent extends React.Component {

    render() {
        return (
            <header className="container">
                <Heading />
                <SearchField />
            </header>
        );
    }
}

export default HeaderComponent
