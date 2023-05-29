import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header>
                <img
                    src="https://stickerly.pstatic.net/sticker_pack/Z2UZ1Cl7MpMvrqttJIf8zw/6F64OU/39/f8ff04d5-569c-4fe5-8ae1-d81205ebde3f.png"
                    alt="problem ?" />
                <p>{this.props.name}</p>
            </header>)
    }
}

export default Header;