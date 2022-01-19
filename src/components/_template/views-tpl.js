import React, {Component} from 'react';

class ViewsTpl extends Component {



    render() {
        return (
            <>
                <header>
                    // create navbar
                </header>
                    <main className={this.props.classname}>
                        {this.props.children}
                    </main>
                <footer>
                    // create footer
                </footer>
            </>
        );
    }
}

export default ViewsTpl;
