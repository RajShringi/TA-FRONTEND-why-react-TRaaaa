function ProgressItem(props) {
  return (
    <div className="progress-item">
      <div className="flex">
        <h3>{props.skill}</h3>
        <p>{props.percentage}%</p>
      </div>
      <progress value={props.percentage} max="100"></progress>
    </div>
  );
}
export default ProgressItem;
