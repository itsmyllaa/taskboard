package com.camila.board.taskboard.controller;

import com.camila.board.taskboard.model.Task;
import com.camila.board.taskboard.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> list() {
        return service.getAll();
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return service.create(task);
    }

    @PutMapping("/{id}")
    public Optional<Task> update(@PathVariable Long id, @RequestBody Task task) {
        return service.update(id, task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
