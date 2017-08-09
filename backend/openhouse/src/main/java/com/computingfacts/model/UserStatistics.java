package com.computingfacts.model;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Value;

/**
 *
 * @author Joseph <joseph@ebi.ac.uk>
 */
@Value
@Builder
public class UserStatistics {

    //private final long micropostCnt;
    private final long followingCount;
    private final long followerCount;

    @QueryProjection
    public UserStatistics(long followingCnt, long followerCnt) {
        this.followingCount = followingCnt;
        this.followerCount = followerCnt;
    }

}
