import React, {Component} from 'react'
import styles from './Layout.module.css'
import styles2 from './Layout2.module.scss'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'


class Layout extends Component {

    state = {
        menu: false
    }

    ToggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {
        return (
            <div className={styles.Layout}>
                <Drawer
                    onClick={this.ToggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <MenuToggle
                onToggle={this.ToggleMenuHandler}
                isOpen={this.state.menu}
                />
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout