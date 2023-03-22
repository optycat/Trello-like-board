import { useState } from "react";

const TitlePretier = ({ content, limit, className, tagName }) => {

    const [showAll, setShowAll] = useState(false);

    const handleChangeText = () => setShowAll(!showAll);

    if (content && !tagName) {
        if (content.length <= limit) {
            return <h3 className={className ? className : ''}>{content}</h3>;
        }
        if (showAll) {
            return (
                <h3 className={className ? className : ''} onClick={handleChangeText}>
                    {content}
                </h3>
            );
        }
        const toShow = content.substring(0, limit) + '...';
        return (
            <h3 className={className ? className : ''} onClick={handleChangeText}>
                {toShow}
            </h3>
        );
    } else if (content) {
        if (content.length <= limit) {
            return <strong className={className ? className : ''}>{content}</strong>;
        }
        if (showAll) {
            return (
                <strong className={className ? className : ''} onClick={handleChangeText}>
                    {content}
                </strong>
            );
        }
        const toShow = content.substring(0, limit) + '...';
        return (
            <strong className={className ? className : ''} onClick={handleChangeText}>
                {toShow}
            </strong>
        );
    }
}

export default TitlePretier;
