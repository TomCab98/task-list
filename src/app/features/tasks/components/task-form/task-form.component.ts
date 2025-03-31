import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { TaskValidator } from '../../validators/task.validator';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() saveTask = new EventEmitter<any>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required, TaskValidator.dateValidator]],
      reminder: [false],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;

      const formattedDate = formatDate(formValue.date, 'dd/MM/yyyy', 'en-US');
      const task = {
        ...formValue,
        date: formattedDate,
      };

      this.saveTask.emit(task);
      this.taskForm.reset();
    }
  }
}
