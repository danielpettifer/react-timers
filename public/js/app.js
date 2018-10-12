class TimersDashboard extends React.Component {
    render () {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                        />
                </div>
            </div>
        );
    }
}

class EditableTimerList extends React.Component {
    render () {
        return (
            <div id="timers">
                <EditableTimer
                    title="Learn React"
                    project="World domination"
                    elapsed="9769769876"
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title="Learn Extreme Tea making"
                    project="World domination"
                    elapsed="658658658765"
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        );
    }
}