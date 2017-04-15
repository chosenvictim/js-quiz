import React from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from './actions';

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    renderAnswerOption(option, idx) {
        let ansIdx = '';
        switch(idx) {
            case 0: ansIdx = 'A'; break;
            case 1: ansIdx = 'B'; break;
            case 2: ansIdx = 'C'; break;
            case 3: ansIdx = 'D'; break;
            default: break;
        }
        return (
            <li key={idx} className='answer-option'>{ansIdx} - {option}</li>
        );
    }

    render() {
        const { questions } = this.props.questionsList;
        return (
            <ul className="questions-container">
                {
                    questions.map((question, idx) => <li key={idx} className="question-item">
                        <h6 style={{margin:0}}>Javascript Quiz {idx+1} of {questions.length}</h6>
                        <h5 style={{margin:'5px 0'}}>{question.text}</h5>
                        <ul style={{marginTop:'20px'}}>
                            { question.options.map((option, idx) => this.renderAnswerOption(option, idx)) }
                        </ul>
                        <ul className='select-options'>
                            {
                                ['A', 'B', 'C', 'D'].map((answer, idx) => <li key={idx} className='tick'>{answer}</li>)
                            }
                        </ul>
                    </li>)
                }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        questionsList: state.questionsList
    }
}

export default connect(mapStateToProps)(App);
