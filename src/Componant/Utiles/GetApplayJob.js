import { getStoredCart } from "../FakeDb"

export const getApplayJob = async () => {
    const jobDta = await fetch('jobs.json')
    const totalJob = await jobDta.json()
    const appliedJobs = getStoredCart()
    let jobapplied = [];

    for (const id in appliedJobs) {
        const foundApply = totalJob.find(singleJob => singleJob._id === id)
        if (foundApply) {
            jobapplied.push(foundApply)

        }
    }
    return { jobapplied, totalJob }

}