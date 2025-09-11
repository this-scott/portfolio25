import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export async function fetchProblemsCompleted(username:string) {
    const query = `
        query getUserProfile($username: String!) {
            matchedUser(username: $username) {
                username
                submitStats: submitStatsGlobal {
                    acSubmissionNum {
                    difficulty
                    count
                    submissions
                    }
                }
            }
        }
    `;

    const res = await fetch("https://leetcode.com/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ query, variables: { username }}),
        next: { revalidate: 86400 }
    });

    const { data } = await res.json();

    return data.matchedUser.submitStats.acSubmissionNum[0].count
}