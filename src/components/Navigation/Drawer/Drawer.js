import React, {Component} from 'react'
import style from './Drawer.module.scss'
import Backdrop from '../../Ui/Backdrop/Backdrop'

const links = [
    1, 2, 3
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link,index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
                </li>
            )
        })
    }

    render() {

        const cls = [style.Drawer]

        if (!this.props.isOpen) {
            cls.push(style.close)
        }

        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
                {this.props.isOpen ? <Backdrop  onClick={this.props.onClick} /> : null }

            </React.Fragment>
        )
    }

}

export default Drawer