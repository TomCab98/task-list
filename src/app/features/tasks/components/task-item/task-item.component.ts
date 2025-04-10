import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../core/models/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  isDeleting: { [key: number]: boolean } = {};

  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  handleDelete(task: Task, event: MouseEvent): void {
    event.stopPropagation();
    this.isDeleting[task.id!] = true;

    setTimeout(() => {
      this.onDelete(task);
      delete this.isDeleting[task.id!];
    }, 1700);
  }
}
