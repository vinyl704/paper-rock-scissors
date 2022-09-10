export default function Scoreboard(props){
    //console.log(props)
    return(
        <table id="scoreboard">
            <thead>
                <tr>
                    <th>Player 1</th>
                    <th>Player 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.score1}</td>
                    <td>{props.score2}</td>
                </tr>
            </tbody>
        </table>
    )
}