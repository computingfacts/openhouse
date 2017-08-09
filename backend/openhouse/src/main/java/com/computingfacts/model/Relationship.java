package com.computingfacts.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "relationship", uniqueConstraints = @UniqueConstraint(columnNames = {"idfollower", "idfollowed"}))
@NoArgsConstructor
@Data

/**
 *
 * @author Joseph <joseph@ebi.ac.uk>
 */
public class Relationship implements Serializable {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @GeneratedValue(strategy = GenerationType.SEQUENCE)//MYSQL don't support sequence.

    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    @NotNull
    @JoinColumn(name = "idfollower", referencedColumnName = "iduserProfile")
    @ManyToOne
    @JsonIgnore
    private UserProfile follower;

    @NotNull
    //@ManyToOne
    @JoinColumn(name = "idfollowed", referencedColumnName = "iduserProfile")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private UserProfile followed;

    public Relationship(UserProfile follower, UserProfile followed) {
        this.follower = follower;
        this.followed = followed;
    }
}
