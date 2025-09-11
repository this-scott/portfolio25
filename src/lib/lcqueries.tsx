import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export async function fetchLeetcodeValue(username:string, qtarget:string) {
    let query = ''
    if (qtarget=="submissionCount") {
        query = `
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
    }
    else if (qtarget=="streakLength") {
        query = `
            query getUserStreak($username: String!, $year: Int!) {
                matchedUser(username: $username) {
                    userCalendar(year: $year) {
                    activeYears
                    streak
                    totalActiveDays
                    submissionCalendar
                    }
                }
            }
        `;
    }
    const res = await fetch("https://leetcode.com/graphql/", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ query, variables: { username, year: 2025 }}),
        next: { revalidate: 86400 }
    });

    const { data } = await res.json();
    let value = -1
    if (qtarget=="submissionCount") {value = data.matchedUser.submitStats.acSubmissionNum[0].count}
    if (qtarget=="streakLength") {value = data.matchedUser.userCalendar.streak}
    return value
}