/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.computingfacts.model;

import java.io.Serializable;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author <a href="mailto:joseph@ebi.ac.uk">Joseph</a>
 */
@Entity
@Table(name = "recipe_ingredient")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "RecipeIngredient.findAll", query = "SELECT r FROM RecipeIngredient r"),
    @NamedQuery(name = "RecipeIngredient.findByIdrecipeIngredient", query = "SELECT r FROM RecipeIngredient r WHERE r.idrecipeIngredient = :idrecipeIngredient"),
    @NamedQuery(name = "RecipeIngredient.findByIdingredient", query = "SELECT r FROM RecipeIngredient r WHERE r.idingredient = :idingredient"),
    @NamedQuery(name = "RecipeIngredient.findByRecipeIngredientQuantity", query = "SELECT r FROM RecipeIngredient r WHERE r.recipeIngredientQuantity = :recipeIngredientQuantity"),
    @NamedQuery(name = "RecipeIngredient.findByRecipeIngredientMeasure", query = "SELECT r FROM RecipeIngredient r WHERE r.recipeIngredientMeasure = :recipeIngredientMeasure"),
    @NamedQuery(name = "RecipeIngredient.findByRecipeIngredientNote", query = "SELECT r FROM RecipeIngredient r WHERE r.recipeIngredientNote = :recipeIngredientNote")})
public class RecipeIngredient implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idrecipe_ingredient")
    private Long idrecipeIngredient;
    @Basic(optional = false)
    @NotNull
    @Column(name = "idingredient")
    private long idingredient;
    @Size(max = 45)
    @Column(name = "recipe_ingredient_quantity")
    private String recipeIngredientQuantity;
    @Size(max = 45)
    @Column(name = "recipe_ingredient_measure")
    private String recipeIngredientMeasure;
    @Size(max = 100)
    @Column(name = "recipe_ingredient_note")
    private String recipeIngredientNote;
    @JoinColumn(name = "idrecipe_ingredient", referencedColumnName = "idingredient", insertable = false, updatable = false)
    @OneToOne(optional = false)
    private Ingredient ingredient;
    @JoinColumn(name = "idrecipe", referencedColumnName = "idrecipe")
    @ManyToOne(optional = false)
    private Recipe idrecipe;

    public RecipeIngredient() {
    }

    public RecipeIngredient(Long idrecipeIngredient) {
        this.idrecipeIngredient = idrecipeIngredient;
    }

    public RecipeIngredient(Long idrecipeIngredient, long idingredient) {
        this.idrecipeIngredient = idrecipeIngredient;
        this.idingredient = idingredient;
    }

    public Long getIdrecipeIngredient() {
        return idrecipeIngredient;
    }

    public void setIdrecipeIngredient(Long idrecipeIngredient) {
        this.idrecipeIngredient = idrecipeIngredient;
    }

    public long getIdingredient() {
        return idingredient;
    }

    public void setIdingredient(long idingredient) {
        this.idingredient = idingredient;
    }

    public String getRecipeIngredientQuantity() {
        return recipeIngredientQuantity;
    }

    public void setRecipeIngredientQuantity(String recipeIngredientQuantity) {
        this.recipeIngredientQuantity = recipeIngredientQuantity;
    }

    public String getRecipeIngredientMeasure() {
        return recipeIngredientMeasure;
    }

    public void setRecipeIngredientMeasure(String recipeIngredientMeasure) {
        this.recipeIngredientMeasure = recipeIngredientMeasure;
    }

    public String getRecipeIngredientNote() {
        return recipeIngredientNote;
    }

    public void setRecipeIngredientNote(String recipeIngredientNote) {
        this.recipeIngredientNote = recipeIngredientNote;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public Recipe getIdrecipe() {
        return idrecipe;
    }

    public void setIdrecipe(Recipe idrecipe) {
        this.idrecipe = idrecipe;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idrecipeIngredient != null ? idrecipeIngredient.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof RecipeIngredient)) {
            return false;
        }
        RecipeIngredient other = (RecipeIngredient) object;
        if ((this.idrecipeIngredient == null && other.idrecipeIngredient != null) || (this.idrecipeIngredient != null && !this.idrecipeIngredient.equals(other.idrecipeIngredient))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.computingfacts.model.RecipeIngredient[ idrecipeIngredient=" + idrecipeIngredient + " ]";
    }
    
}
