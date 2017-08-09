package com.computingfacts.service.mediafile;

import java.io.IOException;
import org.springframework.core.io.Resource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author <a href="mailto:joseph@ebi.ac.uk">Joseph</a>
 */
public interface MediaFileService {

    @PreAuthorize("hasRole('USER')")
    boolean storeFile(MultipartFile file, String fileLocation);

    /**
     * 
     * @param file MultipartFile
     * @param filePath dir/filename e.g /usr/local/image.png
     * @return true if success
     */
    @PreAuthorize("hasRole('USER')")
    boolean saveFile(MultipartFile file, String filePath);

    @PreAuthorize("hasRole('USER')")
    boolean deleteUserFile(String fileToDelete, String fileOwner) throws IOException;

    @PreAuthorize("hasRole('USER')")
    boolean deleteFile(String filename) throws IOException;

    @PreAuthorize("hasRole('USER')")
    boolean deleteFile(String filename, String fileDirectory) throws IOException;

    @PreAuthorize("hasRole('USER')")
    boolean deleteFileRecursively(String userRootFolder);

    Resource loadFileAsResource(String fileDirectory, String filename);
     Resource loadFileAsResource(String filePath);

}
