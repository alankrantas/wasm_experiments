package covid

import (
	"encoding/csv"
	"errors"
	"io"
	"net/http"
	"strconv"
	"strings"
)

const url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"

func QueryCovidCase(region string) (int, error) {

	r, err := http.Get(url)
	if err != nil {
		return 0, err
	}
	defer r.Body.Close()

	reader := csv.NewReader(r.Body)
	header := true

	for {

		record, rowErr := reader.Read()
		if rowErr == io.EOF {
			break
		} else if rowErr != nil {
			return 0, rowErr
		}

		if header {
			header = false
			continue
		}

		if strings.ToLower(record[1]) == strings.ToLower(region) &&
			record[0] == "" {
			cases, convErr := strconv.Atoi(record[len(record)-1])
			if convErr != nil {
				return 0, convErr
			}
			return cases, nil
		}
	}

	return 0, errors.New("invalid country name")
}
