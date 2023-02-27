package com.qkr9796.data.member;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String userid;

    @Column
    private String password;

    @Column
    private String roles;

    @Column(unique = true)
    private String createKey;

    public Member(String createKey){
        this.createKey = createKey;
    }

    public Member allocate(String userid, String password, String roles){
        this.userid = userid;
        this.password = password;
        this.roles = roles;

        return this;
    }

}
