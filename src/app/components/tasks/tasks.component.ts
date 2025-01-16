import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskModalComponent } from './add-task-modal/task-moda.component';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, TaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showModal: boolean = false;

  constructor(
    private readonly taskService: TaskService,
    private readonly uiService: UiService
  ) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
    this.uiService.getShowModal().subscribe((state) => {
      this.showModal = state;
    });
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  closeModal(): void {
    this.uiService.setModalState(false);
  }

  onTaskSaved(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
