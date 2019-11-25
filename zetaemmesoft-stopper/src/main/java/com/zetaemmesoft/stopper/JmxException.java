package com.zetaemmesoft.stopper;

public class JmxException extends RuntimeException {

    private static final long serialVersionUID = 4778652322569727529L;

    public JmxException() {
	super();
    }

    public JmxException(String message) {
	super(message);
    }

    public JmxException(String message, Throwable cause) {
	super(message, cause);
    }

    public JmxException(Throwable cause) {
	super(cause);
    }
}
