package com.camila.board.taskboard.repository;

import com.camila.board.taskboard.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
