package com.computingfacts.service.mediafile;

import com.computingfacts.security.principal.WithMockUserProfile;
import com.computingfacts.service.mediafile.MediaFileService;
import com.computingfacts.service.security.SecurityService;
import com.computingfacts.utils.FileUtil;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.junit.AfterClass;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author <a href="mailto:joseph@ebi.ac.uk">Joseph</a>
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("dev")
public class MediaFileServiceIT {

    //private static final String userHome = System.getProperty("user.home");
    // private static final String UPLOAD_DIR = userHome + "/GLOBAL/"; //"F://temp//";
    @Autowired
    private MediaFileService mediaFileService;
    @Autowired
    protected SecurityService securityService;
    @Autowired
    private Environment env;

    private MockMultipartFile defaultMultipartFile;
    private String defaultFileLocation;
    private final String globalFilename = "image.png";
    private static final String globalusername = "default";
    static String rootDir;

    public String getRootDirectory() {
        return env.getProperty("app.resource.Url.server");

    }

    @Before
    public void setUp() {

        String name = "file";
        String filename = "sample.txt";
        String contentType = "text/plain";
        byte[] content = "This is a sample text file".getBytes();
        defaultMultipartFile = new MockMultipartFile(name, filename, contentType, content);

        String fileCategory = "profile";
        String username = "default";
        defaultFileLocation = FileUtil.computeUniqueDirectory(getRootDirectory(), username, fileCategory);
        rootDir = getRootDirectory();

    }

    @AfterClass
    public static void cleanUp() {
        String userFileDir = rootDir + "/" + globalusername;
        FileUtil.deleteDirAndFilesRecursively(userFileDir);

    }

    /**
     * Test of storeFile method, of class MediaFileService.
     */
    @Test
    @WithMockUserProfile
    public void testStoreFile_MultipartFile_String() {
        System.out.println("storeFile");

        String username = securityService.findLoggedInUsername();

        assertNotNull(username);

        String name = "file";
        String filename = globalFilename;
        String contentType = "text/plain";
        byte[] content = "This is my profile photo. This test is using a text file to simulate an image".getBytes();
        MockMultipartFile multipartFile
                = new MockMultipartFile(name, filename, contentType, content);

        String fileCategory = "profile";
        String fileLocation = FileUtil.computeUniqueDirectory(getRootDirectory(), username, fileCategory);

        boolean expResult = true;
        boolean result = mediaFileService.storeFile(multipartFile, fileLocation);

        String theFile = fileLocation + "/" + multipartFile.getOriginalFilename();

        assertTrue(FileUtil.doesFileExist(theFile));
        assertEquals(expResult, result);

    }

    /**
     * Test of deleteFile method, of class MediaFileService.
     *
     * @throws java.lang.Exception
     */
    @Test
    @WithMockUserProfile
    public void testDeleteFile_String() throws Exception {
        System.out.println("deleteFile");
        MockMultipartFile multipartFile
                = new MockMultipartFile("file", "test_file", "text/plain", "Bla bla".getBytes());

        String fileCategory = "profile";
        String fileLocation = FileUtil.computeUniqueDirectory(getRootDirectory(), globalusername, fileCategory);
        mediaFileService.storeFile(multipartFile, fileLocation);

        String filename = fileLocation + "/" + multipartFile.getOriginalFilename();

        boolean expResult = true;
        boolean deleted = mediaFileService.deleteFile(filename);
        assertEquals(expResult, deleted);

    }

    /**
     * Test of deleteFile method, of class MediaFileService.
     *
     * @throws java.lang.Exception
     */
    @Test
    @WithMockUserProfile
    public void testDeleteFile_String_String() throws Exception {
        System.out.println("deleteFile");

        MockMultipartFile multipartFile
                = new MockMultipartFile("sample file", "sample_data", "text/plain", "some sample data".getBytes());

        mediaFileService.storeFile(multipartFile, defaultFileLocation);

        String filename = defaultMultipartFile.getOriginalFilename();
        String fileDirectory = defaultFileLocation;

        boolean expResult = true;
        boolean result = mediaFileService.deleteFile(filename, fileDirectory);
        assertEquals(expResult, result);

    }

    /**
     * Test of deleteFile method, of class MediaFileService.
     *
     * @throws java.lang.Exception
     */
    @Test
    @WithMockUserProfile
    public void testDeleteOwnerFile_String_String() throws Exception {
        System.out.println("delete User's File");
        String fileOwner = securityService.findLoggedInUsername();

        assertNotNull(fileOwner);

        mediaFileService.storeFile(defaultMultipartFile, defaultFileLocation);

        String fileToDelete = defaultFileLocation + "/" + defaultMultipartFile.getOriginalFilename();

        boolean expResult = false;
        boolean result = mediaFileService.deleteUserFile(fileToDelete, fileOwner);
        assertEquals(expResult, result);

    }

    /**
     * Test of deleteFileRecursively method, of class MediaFileService.
     */
    @Test
    @WithMockUserProfile
    public void testDeleteFileRecursively() {
        System.out.println("deleteFileRecursively");
        String username = securityService.findLoggedInUsername();

        String userRootDir = getRootDirectory() + "/" + username;
        boolean expResult = true;

        boolean result = mediaFileService.deleteFileRecursively(userRootDir);
        assertEquals(expResult, result);

    }

    /**
     * Test of deleteFileRecursively method, of class MediaFileService.
     */
    @Test
    @WithMockUserProfile
    public void testDeleteFileRecursively_when_file_does_not_exists() {
        System.out.println("testDeleteFileRecursively_when_file_does_not_exists");

        String rootDirs = getRootDirectory() + "/" + "unknown";
        boolean expResult = false;

        boolean result = mediaFileService.deleteFileRecursively(rootDirs);

        assertEquals(expResult, result);

    }

    /**
     * Test of loadFileAsResource method, of class MediaFileService.
     *
     * @throws java.net.MalformedURLException
     */
    @Test
    public void testLoadFileAsResource() throws MalformedURLException {
        System.out.println("loadFileAsResource");

        MockMultipartFile multipartFile
                = new MockMultipartFile("view File", "view_data", "text/plain", "data to view".getBytes());

        String fileDirectory = defaultFileLocation;
        String filename = multipartFile.getOriginalFilename();

        mediaFileService.storeFile(multipartFile, fileDirectory);

        Path file = Paths.get(fileDirectory).resolve(filename);
        Resource expResult = new UrlResource(file.toUri());
        Resource result = mediaFileService.loadFileAsResource(fileDirectory, filename);
        assertEquals(expResult, result);

    }

}
