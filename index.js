class PrismaFiltersGenerator {
	constructor() {
		this.query;
	}

	generateFilters(querys) {
		const filters = {
			AND: [],
		};

		for (const query in querys) {
			if (query.startsWith("gtw")) {
				query.replace("gte", "");
        
			} else if (query.startsWith("gt")) {
			} else if (query.startsWith("lte")) {
			} else if (query.startsWith("lt")) {
			}
		}
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

module.exports = prismaFiltersGenerator;
