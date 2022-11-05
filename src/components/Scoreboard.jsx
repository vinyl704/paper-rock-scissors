export default function Scoreboard(props) {
  //console.log(props)
  const { score1, score2 } = props;
  return (
    <table id="scoreboard">
      <thead>
        <tr>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{score1}</td>
          <td>{score2}</td>
        </tr>
      </tbody>
    </table>
  );
}
