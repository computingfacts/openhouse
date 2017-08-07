
package com.computingfacts.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author <a href="mailto:joseph@ebi.ac.uk">Joseph</a>
 */
@Entity
@Table(name = "recipe")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Recipe.findAll", query = "SELECT r FROM Recipe r"),
    @NamedQuery(name = "Recipe.findByIdrecipe", query = "SELECT r FROM Recipe r WHERE r.idrecipe = :idrecipe"),
    @NamedQuery(name = "Recipe.findByRecipeName", query = "SELECT r FROM Recipe r WHERE r.recipeName = :recipeName"),
    @NamedQuery(name = "Recipe.findByRecipeDescription", query = "SELECT r FROM Recipe r WHERE r.recipeDescription = :recipeDescription"),
    @NamedQuery(name = "Recipe.findByRecipePrepTime", query = "SELECT r FROM Recipe r WHERE r.recipePrepTime = :recipePrepTime"),
    @NamedQuery(name = "Recipe.findByRecipeCookTime", query = "SELECT r FROM Recipe r WHERE r.recipeCookTime = :recipeCookTime")})
public class Recipe implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idrecipe")
    private Long idrecipe;
    @Size(max = 100)
    @Column(name = "recipe_name")
    private String recipeName;
    @Size(max = 255)
    @Column(name = "recipe_description")
    private String recipeDescription;
    @Column(name = "recipe_prep_time")
    private LocalDateTime recipePrepTime;
    @Column(name = "recipe_cook_time")
    private LocalDateTime recipeCookTime;
    @JoinColumn(name = "recipe_author", referencedColumnName = "iduserProfile")
    @ManyToOne(optional = false)
    private UserProfile recipeAuthor;

    public Recipe() {
    }

    public Recipe(Long idrecipe) {
        this.idrecipe = idrecipe;
    }

    public Long getIdrecipe() {
        return idrecipe;
    }

    public void setIdrecipe(Long idrecipe) {
        this.idrecipe = idrecipe;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public String getRecipeDescription() {
        return recipeDescription;
    }

    public void setRecipeDescription(String recipeDescription) {
        this.recipeDescription = recipeDescription;
    }

    public LocalDateTime getRecipePrepTime() {
        return recipePrepTime;
    }

    public void setRecipePrepTime(LocalDateTime recipePrepTime) {
        this.recipePrepTime = recipePrepTime;
    }

    public LocalDateTime getRecipeCookTime() {
        return recipeCookTime;
    }

    public void setRecipeCookTime(LocalDateTime recipeCookTime) {
        this.recipeCookTime = recipeCookTime;
    }

    public UserProfile getRecipeAuthor() {
        return recipeAuthor;
    }

    public void setRecipeAuthor(UserProfile recipeAuthor) {
        this.recipeAuthor = recipeAuthor;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idrecipe != null ? idrecipe.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Recipe)) {
            return false;
        }
        Recipe other = (Recipe) object;
        return !((this.idrecipe == null && other.idrecipe != null) || (this.idrecipe != null && !this.idrecipe.equals(other.idrecipe)));
    }


    
}
