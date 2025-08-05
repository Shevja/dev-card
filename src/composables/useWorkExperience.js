import {usePluralize} from "@/composables/usePluralizeWords.js";

export function useGetCurrentExperience(date) {
    const exp = useGetWorkExperience(date)

    const yearWord = usePluralize(exp.years, ['год', 'года', 'лет'])
    const monthsWord = usePluralize(exp.months, ['месяц', 'месяца', 'месяцев'])

    return `${exp.years} ${yearWord} ${exp.months} ${monthsWord}`
}

export function useGetWorkExperience(startDate, today = new Date()) {
    const start = startDate instanceof Date ? startDate : new Date(startDate)
    let years = today.getFullYear() - start.getFullYear()
    let months = today.getMonth() - start.getMonth() + 1

    return {years, months}
}