package com.computingfacts.model;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author joseph
 */
@Entity
@Table(name = "userRole")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "UserRole.findAll", query = "SELECT u FROM UserRole u"),
    //@NamedQuery(name = "UserRole.findByIduserRole", query = "SELECT u FROM UserRole u WHERE u.iduserRole = :iduserRole"),
    @NamedQuery(name = "UserRole.findByUserole", query = "SELECT u FROM UserRole u WHERE u.userole = :userole"),
    @NamedQuery(name = "UserRole.findByUserProfileId", query = "SELECT u FROM UserRole u WHERE u.userProfileId = :userProfileId")})
public class UserRole implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "iduserRole")
    private Long iduserRole;
    @Column(name = "userole")
    private Integer userole;
    @Column(name = "profileRole")
    private String profileRole;
    @Column(name = "userProfileId")
    private Long userProfileId;
    @OneToOne(mappedBy = "userRole")
    private UserProfile userProfile;
    


    public UserRole() {
    }

    public UserRole(Long iduserRole) {
        this.iduserRole = iduserRole;
    }

    public Long getIduserRole() {
        return iduserRole;
    }

    public void setIduserRole(Long iduserRole) {
        this.iduserRole = iduserRole;
    }

    public Integer getUserole() {
        return userole;
    }

    public void setUserole(Integer userole) {
        this.userole = userole;
    }

    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public String getProfileRole() {
        return profileRole;
    }

    public void setProfileRole(String profileRole) {
        this.profileRole = profileRole;
    }
    
    

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + Objects.hashCode(this.iduserRole);
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
        final UserRole other = (UserRole) obj;
        return Objects.equals(this.iduserRole, other.iduserRole);
    }

    }
