import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { FormGroup, FormBuilder, Validators} from "@angular/forms"

import { Task } from '../shared/task.model'
import { TaskService } from '../shared/task.service'
import { FormUtils } from '../../shared/form.utils'

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit, AfterViewInit {
  public reactiveTaskForm: FormGroup;
  public task: Task;
  public taskDoneOptions: Array<any>;
  public formUtils: FormUtils;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
    ){

      this.taskDoneOptions  = [
        { value: false, text: "Pendente" },
        { value: true, text: "Feita" }
      ]

      this.reactiveTaskForm = this.formBuilder.group({
        title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
        deadline: [null, Validators.required],
        done: [null, Validators.required],
        description: [null],
      })

      this.formUtils = new FormUtils(this.reactiveTaskForm)
  }

  public ngOnInit() {
    this.task = new Task(null, null)

    this.route.params
      .switchMap((params: Params) => this.taskService.getById(+params['id']))
      .subscribe(
        task => this.setTask(task),
        error => alert("Ocorreu um erro no servidor, tente mais tarde")
      )
  }

  public setTask(task: Task): void {
    this.task = task
    
    // setValue
    // let formModel = {
    //   title: task.title || null,
    //   description: task.description || null,
    //   done: task.done || null,
    //   deadline: task.deadline || null
    // }
    // this.reactiveTaskForm.setValue(formModel)

    //patchValue

    this.reactiveTaskForm.patchValue(task)
  }

  public ngAfterViewInit() {
    // $("#deadline").datetimepicker();
  }

  public goBack() {
    this.location.back();
  }

  public updateTask() {
    this.task.title = this.reactiveTaskForm.get('title').value;
    this.task.deadline = this.reactiveTaskForm.get('deadline').value;
    this.task.done = this.reactiveTaskForm.get('done').value;
    this.task.description = this.reactiveTaskForm.get('description').value;

    this.taskService.update(this.task)
      .subscribe(
        () => alert("Tarefa atualizada com sucesso!"),
        () => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
  }


  //Form errors methods

  
}