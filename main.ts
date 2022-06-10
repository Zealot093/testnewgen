type Course = {
    name: string,
    prices: number[]
}

// Список курсов
let courses: Course[] = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [99, 200] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Фильтр курсов по цене
const coursesFilter = (courses: Course[], range: number[]) => {
    const rangeStart = range[0] || 0
    const rangeEnd = range[1] || Number.POSITIVE_INFINITY

    const filteredCourses = courses.filter((item) => {
        return (
            rangeStart <= (item.prices[0] || 0) && (item.prices[0] || 0) <= rangeEnd
            &&
            rangeStart <= (item.prices[1] || Number.POSITIVE_INFINITY) && (item.prices[1] || Number.POSITIVE_INFINITY) <= rangeEnd
        )
    })
    return filteredCourses
}

// Сортировка курсов по возрастанию цены
const sortCoursesByPrice = (courses: Course[]) => {
    const sortableCourses = [...courses]
    sortableCourses.sort((a: Course, b: Course) => {
        const first = {
            bottomRange: a.prices[0] || 0,
            upperRange: a.prices[1] || Number.POSITIVE_INFINITY
        }
        const second = {
            bottomRange: b.prices[0] || 0,
            upperRange: b.prices[1] || Number.POSITIVE_INFINITY
        }

        if (
            first.upperRange > second.upperRange
        ) return 1;

        if (
            (first.upperRange === second.upperRange)
            &&
            (first.bottomRange > second.bottomRange)
        ) return 1;

        if (
            (first.upperRange === second.upperRange)
            &&
            (first.bottomRange === second.bottomRange)
        ) return 0;

        if (
            first.upperRange < second.upperRange
        ) return -1

        if (
            (first.upperRange === second.upperRange)
            &&
            (first.bottomRange < second.bottomRange)
        ) return -1;
    })

    return sortableCourses;
}

console.log("Отфильтрованные по цене:\n", coursesFilter(courses, requiredRange3))
console.log("Отсортированные по возрастанию цены курсы:\n", sortCoursesByPrice(courses))