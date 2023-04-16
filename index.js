class PrismaFiltersGenerator {
	constructor() {
		this.query;
	}

	generateFilters(querys) {
		const filters = {
			AND: [],
		};

		for (const query in querys) {
			if (query.startsWith("gte")) {
				const key = query.replace("gte", "");
				const value = querys[query];
				filters.AND.push({
					[key]: { gte: value },
				});
			} else if (query.startsWith("gt")) {
				const key = query.replace("gt", "");
				const value = querys[query];
				filters.AND.push({
					[key]: { gt: value },
				});
			} else if (query.startsWith("lte")) {
				const key = query.replace("lte", "");
				const value = querys[query];
				filters.AND.push({
					[key]: { lte: value },
				});
			} else if (query.startsWith("lt")) {
				const key = query.replace("lt", "");
				const value = querys[query];
				filters.AND.push({
					[key]: { lt: value },
				});
			}
		}
    return filters;
	}
}

const prismaFiltersGenerator = new PrismaFiltersGenerator();

/**
 * Patterns
 * @field numbers
 *
 * @arguments lt{field}(value), lte{field}(value), gt{field}(value), gte{field}(value), equal{field}(value), between{field}(minValue, maxValue), notEqual{field}(value), isNull{field}()
 */

/**
 * Patterns
 * @field text
 *
 * @arguments contains{field}(value), equal{field}(value), startsWith{field}(value), endsWith{field}(value), notEqual{field}(value), isNull{field}()
 */

/**
 * Patterns
 * @field date
 *
 * @arguments equal{field}(value), after{field}(value), before{field}(value), gte{field}(value), lastWeeks{field}(value), lastMonths{field}(value), lastYears{field}(value), lastDays{field}(value), isNull{field}(),
 */

const filters = prismaFiltersGenerator.generateFilters({
  gteNumPages: 120,
  lteNumAuthors: 150,
  gtNumPosts: 180,
  ltNumLikes: 190,
})

console.log(JSON.stringify(filters, null, 1));

module.exports = prismaFiltersGenerator;
