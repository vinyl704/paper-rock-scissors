export default function Scoreboard(props) {
  const { score1, score2 } = props;

  return (
    <table id="scoreboard">
      <thead>
        <tr>
          <th colSpan={1}>Player 1</th>
          <th colSpan={1}>Player 2</th>
        </tr>
      </thead>
      <tbody>
        <tr className="scores">
          <td
            colSpan={1}
            className={
              score1 > score2
                ? "text-success"
                : score1 === score2
                ? "text-black"
                : "text-danger"
            }
          >
            {score1}
          </td>
          <td
            colSpan={1}
            className={
              score1 < score2
                ? "text-success"
                : score1 === score2
                ? "text-black"
                : "text-danger"
            }
          >
            {score2}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
