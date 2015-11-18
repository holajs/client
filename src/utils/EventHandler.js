import Rx from 'rx';

class EventHandler {
    getEnumerablePropertyNames(target) {
        let result = [];
        for (var key in target) {
            result.push(key);
        }
        return result;
    }

    create() {
        let subject = function() {
            subject.onNext.apply(subject, arguments);
        };

        this.getEnumerablePropertyNames(Rx.Subject.prototype)
        .forEach(function (property) {
            subject[property] = Rx.Subject.prototype[property];
        });
        Rx.Subject.call(subject);

        return subject;
    }
}

export default new EventHandler();
