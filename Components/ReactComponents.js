class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2 className = "class-highlight">Hello World from a Component!</h2>
            </div>
        );
    }
}


class KnightAbilitiesList extends React.Component {
    render() {
        const nail_str = "Nail";
        const mothwing_str = "Mothwing Cloak";
        const mantis_str = "Mantis Claw";

        const knight_image = 'images/knight.jpg'
        const image_el = <img src={knight_image} width="500px"/>

        var abilities = ['Double-jump', 'Vengeful Spirit', 'Desolate Dive', 'Super Dash']
        var ability = abilities[Math.floor(Math.random() * abilities.length)];

        const ability_list = (
            <div>
                <div key="el-key" >Some items and abilities of the knight</div>
                <ul>
                    <li key="Nail-key">{nail_str}</li>
                    <li key="Moth-key">{mothwing_str}</li>
                    <li key="Mantis-key">{mantis_str}</li>
                    <li key="Ability_key" className="knight-ability">{ability}</li>
                </ul>
                <div>
                {image_el}
                </div>
            </div>
        );

        return ability_list;
    }
}

ReactDOM.render(<MyFirstComponent/>, document.getElementById("my-first-component"));

function on_tick() {
    ReactDOM.render(<KnightAbilitiesList/>, document.getElementById("knight-ability-list"));
}

setInterval(on_tick, 2000);