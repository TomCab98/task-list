import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() taskSaved = new EventEmitter<any>();

  onTaskSaved(task: any): void {
    this.taskSaved.emit(task);
    this.closeModal.emit();
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
