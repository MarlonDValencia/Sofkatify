package com.sofkatify.api.User;

public class NotFoundIdException extends RuntimeException {
    public NotFoundIdException(String message){
        super(message);
    }
}
