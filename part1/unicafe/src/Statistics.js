const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>


const Statistics = ({good,bad,neutral}) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (all ? (good * 100) / all : 0) + " %";
    if (all) {
        return (
            <div>
                <table>
                    <tbody>
                        <StatisticLine text='good' value={good} />
                        <StatisticLine text='neutral' value={neutral} />
                        <StatisticLine text='bad' value={bad} />
                        <StatisticLine text='all' value={all} />
                        <StatisticLine text='average' value={average} />
                        <StatisticLine text='positive' value={positive} />
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <p>No Statistics Available</p>
    }
};

export default Statistics