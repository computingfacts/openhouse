package com.computingfacts.service.mediafile;

import com.computingfacts.utils.FileUtil;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author <a href="mailto:joseph@ebi.ac.uk">Joseph</a>
 */
@Service
class MediaFileServiceImpl implements MediaFileService {

    private static final Logger logger = LoggerFactory.getLogger(MediaFileService.class);

    @Override
    public boolean storeFile(MultipartFile file, String fileLocation) {
        Path path = FileUtil.createDirectory(fileLocation);
        if (!path.toFile().isDirectory()) {
            return false;
        }
        File fileToBeCreated = new File(fileLocation + "/" + file.getOriginalFilename());

        try {
            file.transferTo(fileToBeCreated);

        } catch (IOException | IllegalStateException ex) {
            logger.error("ERROR during File upload - " + ex.getMessage(), ex);
            return false;
        }
        return true;
    }

    @Override
    public boolean saveFile(MultipartFile file, String filePath) {

        try (BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(filePath)))) {
            stream.write(file.getBytes());
        } catch (Exception ex) {
            logger.error("ERROR during File upload - " + ex.getMessage(), ex);
            return false;
        }
        return true;
    }

    /**
     *
     * @param fileToDelete including the pathToFile and filename
     * @return
     * @throws IOException
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public boolean deleteUserFile(String fileToDelete, String fileOwner) throws IOException {

        if (fileToDelete.contains(fileOwner)) {
            return deleteLocalFile(fileToDelete);
        }
        return false;
    }

    /**
     *
     * @param fileToDelete including the pathToFile and filename
     * @return
     * @throws IOException
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public boolean deleteFile(String fileToDelete) throws IOException {

        return deleteLocalFile(fileToDelete);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public boolean deleteFile(String filename, String fileDirectory) throws IOException {

        String fileToDelete = String.format("%s/%s", fileDirectory, filename);
        return deleteLocalFile(fileToDelete);
    }

    private boolean deleteLocalFile(String fileToDelete) throws IOException {

        Path path = Paths.get(fileToDelete);
        return Files.deleteIfExists(path);

    }

    @Override
    public boolean deleteFileRecursively(String userRootFolder) {

        Path fileLocation = Paths.get(userRootFolder);
        return FileSystemUtils.deleteRecursively(fileLocation.toFile());
    }

    private Path loadFile(String fileDirectory, String filename) {

        Path fileLocation = Paths.get(fileDirectory);
        return fileLocation.resolve(filename);
    }

    @Override
    public Resource loadFileAsResource(String fileDirectory, String filename) {
        try {
            Path file = loadFile(fileDirectory, filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException("Could not read file: " + filename);

            }
            //return resource;
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }

    }

    @Override
    public Resource loadFileAsResource(String filePath) {
        Path file = Paths.get(filePath);
        try {

            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException("Could not read file ");

            }
            //return resource;
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file ", e);
        }
    }

}
