import { TestBed } from '@angular/core/testing';

import { HttpTodoRepositoryService } from './http-todo-repository.service';

describe('HttpTodoRepositoryService', () => {
  let service: HttpTodoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTodoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
