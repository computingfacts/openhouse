package com.computingfacts.model;

import com.computingfacts.utils.RoleUtil;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.Email;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author Joseph <joseph@ebi.ac.uk>
 */
@Entity
//@ToString
//@Table(name = "userProfile")
@Table(name = "userProfile", uniqueConstraints = @UniqueConstraint(columnNames = {"emailAddress"}))
@XmlRootElement
public class UserProfile implements UserDetails, Serializable {

    private static final long serialVersionUID = 1L;
    //MYSQL SEQUENCE ISSUES 
    //see https://vladmihalcea.com/2017/01/17/how-to-replace-the-table-identifier-generator-with-either-sequence-or-identity-in-a-portable-way/
    @Id
    //@GeneratedValue(strategy = GenerationType.SEQUENCE)//MYSQL does not support sequence yet
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Basic(optional = false)
    @Column(name = "iduserProfile")
    private Long iduserProfile;
    @Size(max = 255)
    @Column(name = "firstName")
    private String firstName;
    @Size(max = 255)
    @Column(name = "lastName")
    private String lastName;
    @Size(max = 255)
    @Column(name = "password")
    private String password;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "username")
    private String username;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Pattern(regexp = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
    @Email(message = "*Please provide a valid Email")
    @Column(name = "emailAddress")
    private String emailAddress;
    @Size(max = 100)
    @Column(name = "memorableWord")
    private String memorableWord;
    @Column(name = "activeProfile")
    private Boolean activeProfile;

    @Getter
    @Setter
    @Size(max = 100)
    @Column(name = "profileType")
    private String profileType;
    @Getter
    @Setter
    @Column(name = "ipAddress")
    private String ipAddress;

    @Getter
    @Setter
    @Size(max = 255)
    @Column(name = "profileImageUrl")
    private String profileImageUrl;
    @Getter
    @Setter
    @Size(max = 100)
    @Column(name = "providerId")
    private String providerId;
    @Size(max = 255)
    @Column(name = "fullName")
    private String fullName;
    @Size(max = 100)
    @Column(name = "jobTitle")
    private String jobTitle;
    @Column(name = "lastLoginTime")

    private LocalDateTime lastLoginTime;
    @Column(name = "creationDate")
    @CreatedDate
    private LocalDateTime creationDate;
    @Column(name = "modificationDate")
    @CreatedDate
    private LocalDateTime modificationDate;
    @Size(max = 255)
    @Column(name = "profileCoverImg")
    private String profileCoverImg;
    @Size(max = 255)
    @Column(name = "profilePhoto")
    private String profilePhoto;
    @Column(name = "socialUser")
    private Boolean socialUser;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "recipeAuthor")
    private Set<Recipe> recipes;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @PrimaryKeyJoinColumn(name = "iduserProfile", referencedColumnName = "iduserRole")
    private UserRole userRole;

    @OneToMany(mappedBy = "follower", fetch = FetchType.LAZY)
    //@OneToMany(mappedBy = "follower", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<Relationship> followerRelations;

    @OneToMany(mappedBy = "followed", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Relationship> followedRelations;

    public UserProfile() {
    }

    public UserProfile(Long iduserProfile) {
        this.iduserProfile = iduserProfile;
    }

    public UserProfile(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public UserProfile(Long iduserProfile, String emailAddress) {
        this.iduserProfile = iduserProfile;
        this.emailAddress = emailAddress;
    }

    public UserProfile(String emailAddress, String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.username = emailAddress;
    }

    public UserProfile(Long iduserProfile, String emailAddress, String firstName, String lastName) {
        this.iduserProfile = iduserProfile;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }

    public Long getIduserProfile() {
        return iduserProfile;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    //@JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getMemorableWord() {
        return memorableWord;
    }

    public void setMemorableWord(String memorableWord) {
        this.memorableWord = memorableWord;
    }

    public Boolean getActiveProfile() {
        return activeProfile;
    }

    public void setActiveProfile(Boolean activeProfile) {
        this.activeProfile = activeProfile;
    }


    @JsonIgnore
    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + Objects.hashCode(this.emailAddress);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final UserProfile other = (UserProfile) obj;
        return Objects.equals(this.emailAddress, other.emailAddress);
    }

    @JsonIgnore
    public List<Relationship> getFollowerRelations() {
        if (followerRelations == null) {
            followerRelations = new ArrayList<>();
        }

        return followerRelations;
    }

    @JsonIgnore
    public List<Relationship> getFollowedRelations() {
        if (followedRelations == null) {
            followedRelations = new ArrayList<>();
        }

        return followedRelations;
    }

    @Override
    public String toString() {

        final StringBuilder sb = new StringBuilder("UserProfile{");
        sb.append("iduserProfile=").append(iduserProfile);
        sb.append(", firstName=").append(firstName);
        sb.append(", lastName='").append(lastName).append('\'');
        sb.append(", username='").append(username).append('\'');
        sb.append(", emailAddress=").append(emailAddress);
        // sb.append(", signInProvider=").append(signInProvider);
        sb.append(", activeProfile=").append(activeProfile);
        // sb.append(", fullName=").append(fullName);
        sb.append(", lastLoginTime=").append(lastLoginTime);
        sb.append(", creationDate=").append(creationDate);
        sb.append(", modificationDate=").append(modificationDate);
        //sb.append(", jobTitle=").append(jobTitle);
        //sb.append(", socialUser=").append(socialUser);
        sb.append('}');
        return sb.toString();

    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // int role = RoleUtil.ROLE_USER;
        int role = getUserRole().getUserole();
        return RoleUtil.getGrantedAuthoritiesFromUserRole(role);
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public LocalDateTime getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(LocalDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public LocalDateTime getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(LocalDateTime modificationDate) {
        this.modificationDate = modificationDate;
    }

    public String getProfileCoverImg() {
        return profileCoverImg;
    }

    public void setProfileCoverImg(String profileCoverImg) {
        this.profileCoverImg = profileCoverImg;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public Boolean getSocialUser() {
        return socialUser;
    }

    public void setSocialUser(Boolean socialUser) {
        this.socialUser = socialUser;
    }

    @XmlTransient
    public Set<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(Set<Recipe> recipes) {
        this.recipes = recipes;
    }

    }
