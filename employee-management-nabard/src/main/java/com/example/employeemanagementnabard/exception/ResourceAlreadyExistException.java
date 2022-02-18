package com.example.employeemanagementnabard.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class ResourceAlreadyExistException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    public ResourceAlreadyExistException(String message){
        super(message);
    }
}