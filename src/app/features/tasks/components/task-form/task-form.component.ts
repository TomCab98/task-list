import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
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
      text: ['', [Validators.required, Validators.minLength(3)]],
      day: ['', [Validators.required, TaskValidator.dateValidator]],
      reminder: [false],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.saveTask.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}
