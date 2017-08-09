
package com.computingfacts.service.mediafile;



/**
 *
 * @author <a href="mailto:joseph@ebi.ac.uk">Joseph</a>
 */
public class StorageFileNotFoundException extends StorageException {

    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}