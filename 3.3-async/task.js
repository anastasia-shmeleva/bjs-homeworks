// Будильник-колыбельная
'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) throw new Error('Cannot identify the alarm. No ID is given');
        if (this.alarmCollection.find(call => call.id === id)) console.error('call with this ID already exists');
        else this.alarmCollection.push({id,time,callback});
    }

    removeClock(id) {
        if (this.alarmCollection = this.alarmCollection.filter(call => call.id !== id)) return true;
        return false;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date();
        let h = currentTime.getHours();
        h = h < 10 ? '0' + h : h;
        let m = currentTime.getMinutes();
        m = m < 10 ? '0' + m : m;
        return h + ':' + m;
    }

    start() {
        function checkClock(call) {
            if (call => call.time === this.getCurrentFormattedTime()) return call.callback();
        }
        if (!this.timerId) return this.timerId = setInterval(() => {
            this.alarmCollection.forEach(call => checkClock(call));
        });
    }

    stop() {
        if (this.timerId !== null && this.timerId !== 0) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Print all calls: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(call => console.log(call.id, call.time));
    }

    clearAlarms() {
        this.stop(this.alarmCollection);
        this.alarmCollection.forEach(call => this.removeClock(call.id));
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => {console.log('Давай, вставай уже'); phoneAlarm.removeClock(2)}, 2);
// phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));
phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь'), 1);
// phoneAlarm.removeClock(2);
console.log(phoneAlarm.alarmCollection);
phoneAlarm.printAlarms();
phoneAlarm.start();
phoneAlarm.stop();