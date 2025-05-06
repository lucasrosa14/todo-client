import { TestBed } from '@angular/core/testing';

import { MemoryTodoRepositoryService } from './memory-todo-repository.service';

describe('MemoryTodoRepositoryService', () => {
  let service: MemoryTodoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryTodoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
