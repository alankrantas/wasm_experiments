package covid

import (
	"testing"
)

func TestQueryCovidCase(t *testing.T) {
	regions := []string{"US", "Japan", "Taiwan*"}

	for _, region := range regions {
		result, err := QueryCovidCase(region)

		if err != nil {
			t.Errorf("error: %v", err)
		}
		t.Logf("result for %v = %v\n", region, result)
	}
}
