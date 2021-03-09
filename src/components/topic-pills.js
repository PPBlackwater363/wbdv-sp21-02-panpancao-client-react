import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import TopicService from '../services/topic-service';

const TopicPills = (
    {
        topics=[
            // {_id: "123", title: "Lesson A"},
            // {_id: "123", title: "Lesson B"},
            // {_id: "123", title: "Lesson C"}
        ],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic,
        selectTopic,
        selected
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [findTopicsForLesson, lessonId])

    return(
        <div>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-link">
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                selectItem={selectTopic}
                                selected={selected}
                                isActive={topic._id === topicId ? "active" : ""}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = state => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        TopicService.createTopic(lessonId, {title: "New Topic"})
            .then(theActualTopic => dispatch({
                type: "CREATE_TOPIC",
                topic: theActualTopic
            }))
    },
    updateTopic: (topic) =>
        TopicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                updatedTopic: topic
            })),
    deleteTopic: (topicToDelete) => {
        TopicService.deleteTopic(topicToDelete._id).then(
            (status) => dispatch({ type: 'DELETE_TOPIC', deleteItem: topicToDelete })
        )

    },
    findTopicsForLesson: (lessonId) => {
        TopicService.findTopicsForLesson(lessonId)
            .then(theTopics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: theTopics
            }))
    },
    selectTopic: (topic) =>
        dispatch({
            type: "SELECT_TOPIC",
            updatedTopic: topic
        })
})

export default connect(stpm, dtpm)(TopicPills)