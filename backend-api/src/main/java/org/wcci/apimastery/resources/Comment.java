package org.wcci.apimastery.resources;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
public class Comment {
    @Id
    @GeneratedValue
    private Long id;
    private String commentTitle;
    @OneToMany
    private Set<Album> albums;
    private Comment(){}
    public Comment (String commentTitle, Album...albums){
        this.commentTitle = commentTitle;
        this.albums = List.of(albums);

    }


}
