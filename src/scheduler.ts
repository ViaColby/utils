/**
 * create a task queue by using Scheduler class
 *
 * @example
 * const scheduler = new Scheduler(3)
 * A queue that limits concurrency to 3 has been created
 * scheduler.add(() => your task())
 */

export type Task = {
    fn: () => any;
    priority: number;
};

export class Scheduler {
    max: number;

    private queue: Task[];

    private runCount: number;

    private isPaused: boolean;

    constructor(max = 5) {
        // 最大队列任务数
        this.max = max;
        // 队列
        this.queue = [];
        // 正在执行数量
        this.runCount = 0;
        // 暂停状态标志
        this.isPaused = false;
    }

    /**
     * 队列内部执行方法
     */
    callback() {
        if (this.isPaused || this.runCount >= this.max || this.queue.length === 0) return;
        this.runCount++;

        const task = this.queue.shift();

        if (task) {
            task.fn().finally(() => {
                this.runCount--;
                this.callback();
            });
        }
    }

    /**
     * 添加任务进入任务队列
     * @param {() => Promise<any>} fn 任务
     * @param {number} priority 任务优先级
     */
    add(fn: () => Promise<any>, priority = 0) {
        return new Promise((...args) => {
            const task: Task = {
                fn: () => fn().then(...args),
                priority,
            };
            // 按优先级插入队列（数字越大优先级越高）
            let inserted = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (priority > this.queue[i].priority) {
                    this.queue.splice(i, 0, task);
                    inserted = true;
                    break;
                }
            }

            if (!inserted) {
                this.queue.push(task);
            }

            // 如果不是暂停状态，尝试执行
            if (!this.isPaused) {
                this.callback();
            }
        });
    }

    /**
     * 暂停任务
     */
    pause() {
        this.isPaused = true;
    }

    /**
     * 恢复任务
     */
    resume() {
        if (this.isPaused) {
            this.isPaused = false;
            this.callback();
        }
    }

    /**
     * 获取当前状态
     */
    getStatus() {
        return {
            max: this.max,
            running: this.runCount,
            queued: this.queue.length,
            isPaused: this.isPaused,
            nextTaskPriority: this.queue.length > 0 ? this.queue[0].priority : null,
        };
    }

    /**
     * 清空队列
     */
    clear() {
        this.queue = [];
    }
}
