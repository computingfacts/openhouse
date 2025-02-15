package com.computingfacts.model;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "ingredient")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Ingredient.findAll", query = "SELECT i FROM Ingredient i"),
    @NamedQuery(name = "Ingredient.findByIdingredient", query = "SELECT i FROM Ingredient i WHERE i.idingredient = :idingredient"),
    @NamedQuery(name = "Ingredient.findByIngredientName", query = "SELECT i FROM Ingredient i WHERE i.ingredientName = :ingredientName"),
    @NamedQuery(name = "Ingredient.findByIngredientImageUrl", query = "SELECT i FROM Ingredient i WHERE i.ingredientImageUrl = :ingredientImageUrl"),
    @NamedQuery(name = "Ingredient.findByIngredientInfo", query = "SELECT i FROM Ingredient i WHERE i.ingredientInfo = :ingredientInfo")})
public class Ingredient implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idingredient")
    private Long idingredient;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "ingredient_name")
    private String ingredientName;
    @Size(max = 255)
    @Column(name = "ingredient_image_url")
    private String ingredientImageUrl;
    @Size(max = 255)
    @Column(name = "ingredient_info")
    private String ingredientInfo;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "ingredient")
    private RecipeIngredient recipeIngredient;

    public Ingredient() {
    }

    public Ingredient(Long idingredient) {
        this.idingredient = idingredient;
    }

    public Ingredient(Long idingredient, String ingredientName) {
        this.idingredient = idingredient;
        this.ingredientName = ingredientName;
    }

    public Long getIdingredient() {
        return idingredient;
    }

    public void setIdingredient(Long idingredient) {
        this.idingredient = idingredient;
    }

    public String getIngredientName() {
        return ingredientName;
    }

    public void setIngredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public String getIngredientImageUrl() {
        return ingredientImageUrl;
    }

    public void setIngredientImageUrl(String ingredientImageUrl) {
        this.ingredientImageUrl = ingredientImageUrl;
    }

    public String getIngredientInfo() {
        return ingredientInfo;
    }

    public void setIngredientInfo(String ingredientInfo) {
        this.ingredientInfo = ingredientInfo;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idingredient != null ? idingredient.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Ingredient)) {
            return false;
        }
        Ingredient other = (Ingredient) object;
        return !((this.idingredient == null && other.idingredient != null) || (this.idingredient != null && !this.idingredient.equals(other.idingredient)));
    }

    @Override
    public String toString() {
        return "com.computingfacts.model.Ingredient[ idingredient=" + idingredient + " ]";
    }

    public RecipeIngredient getRecipeIngredient() {
        return recipeIngredient;
    }

    public void setRecipeIngredient(RecipeIngredient recipeIngredient) {
        this.recipeIngredient = recipeIngredient;
    }

}
