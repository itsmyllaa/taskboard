package com.camila.board.taskboard.service;

import com.camila.board.taskboard.model.Task;
import com.camila.board.taskboard.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAll() {
        return repository.findAll();
    }

    public Task create(Task task) {
        return repository.save(task);
    }

    public Optional<Task> update(Long id, Task task) {
        return repository.findById(id).map(t -> {
            t.setTitle(task.getTitle());
            t.setDescription(task.getDescription());
            t.setStatus(task.getStatus());
            return repository.save(t);
        });
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
