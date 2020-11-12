package org.wcci.apimastery.resources;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Song {
    @ManyToOne
    @JsonIgnore
    private Album album;
    private String songName;
    @Lob
    private String artist;
    private String playTime;
    @Id
    @GeneratedValue
    private Long id;

    protected Song(){}

    public Song (Album album, String songName, String artist, String playTime){
        this.album = album;
        this.songName = songName;
        this.artist = artist;
        this.playTime = playTime;
    }

    public Album album() { return album;}

    public String getArtist () {return artist;}

    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Song song = (Song) o;
        return Objects.equals(songName, song.songName) &&
                Objects.equals(id, song.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(songName, id);
    }
}
