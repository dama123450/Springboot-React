package com.example.demo.student;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("student")

public class StudentController {

        @GetMapping
        public List<Student> getAllStudent() {

                return List.of(
                                new Student(UUID.randomUUID(), "Jean", "Cool",
                                                "Jeancool@gmail.com", Student.Gender.Female),
                                new Student(UUID.randomUUID(), "Jams", "Cool",
                                                "Jamscool@gmail.com", Student.Gender.Male));

        }
}
